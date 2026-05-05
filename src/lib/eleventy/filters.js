const path = require("path");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it")();
const util = require("util");
const { renderRichTextAsHtml } = require("../contentful/richTextRenderer");
const { formatDates, formatFileSize, formatTime } = require("../utils/formatters");

const richTextPartialsEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(path.resolve(__dirname, "../../_includes")),
  { autoescape: false }
);

const addFilters = (eleventyConfig) => {
  // Contentful rich text - this one is a bit special because it needs to be able to render partials
  // for embedded entries/assets, so we pass in the partial rendering function as a second argument.
  // We also DON'T add this filter to the rich text partials environment because we don't want to
  // allow the risk of infinite recursion due to circular references in rich text fields.
  const renderRichTextFilter = (value) =>
    safeFilter(value, (richTextValue) =>
      renderRichTextAsHtml(richTextValue, renderRichTextPartial)
    );
  eleventyConfig.addFilter("renderRichTextAsHtml", renderRichTextFilter);

  // Markdown (inline)
  const renderMarkdownFilter = (value) =>
    safeFilter(value, (markdownValue) => markdownIt.renderInline(markdownValue));
  addSharedFilter(eleventyConfig, "renderMarkdownAsHtml", renderMarkdownFilter);

  // Date formatting (human readable)
  const readableDateFilter = (value) => safeFilter(value, formatDates);
  addSharedFilter(eleventyConfig, "readableDate", readableDateFilter);

  // Time formatting (human readable)
  const readableTimeFilter = (value) => safeFilter(value, formatTime);
  addSharedFilter(eleventyConfig, "readableTime", readableTimeFilter);

  // File size formatting (human readable)
  const readableFileSizeFilter = (value) => safeFilter(value, formatFileSize);
  addSharedFilter(eleventyConfig, "readableFileSize", readableFileSizeFilter);

  // Replace default dump filter with one that is safe to use with complex objects
  // that might include circular references, which would break the default filter
  const inspectFilter = (value) => safeFilter(value, util.inspect);
  addSharedFilter(eleventyConfig, "dump", inspectFilter);

  // Add any Eleventy default filters we might want to use in rich text partials
  copyEleventyFiltersToRichTextEnv(eleventyConfig, ["slugify", "slug", "log"]);
};

const renderRichTextPartial = (templatePath, data = {}) =>
  richTextPartialsEnvironment.render(templatePath, data);

const addSharedFilter = (eleventyConfig, name, filterFunction) => {
  eleventyConfig.addFilter(name, filterFunction);
  richTextPartialsEnvironment.addFilter(name, filterFunction);
};

const copyEleventyFiltersToRichTextEnv = (eleventyConfig, filterNames) => {
  for (const name of filterNames) {
    const filterFunction = eleventyConfig.getFilter(name);
    if (typeof filterFunction === "function") {
      richTextPartialsEnvironment.addFilter(name, filterFunction);
    }
  }
};

const safeFilter = (value, filterFunction) => {
  if (!value) {
    return "";
  }

  try {
    return filterFunction(value);
  } catch (error) {
    console.warn(`Error applying filter to value: ${error}`);
    return "";
  }
};

module.exports = addFilters;
