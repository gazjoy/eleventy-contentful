const path = require("path");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it")();
const { renderRichTextAsHtml } = require("../contentful/richTextRenderer");
const { formatDates, formatFileSize, formatTime } = require("../utils/formatters");
const { slugify } = require("../utils/helpers");

const richTextPartialsEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(path.resolve(__dirname, "../../_includes")),
  { autoescape: false }
);

const renderRichTextPartial = (templatePath, data = {}) => richTextPartialsEnvironment.render(templatePath, data);

const addSharedFilter = (eleventyConfig, name, filterFunction) => {
  eleventyConfig.addFilter(name, filterFunction);
  richTextPartialsEnvironment.addFilter(name, filterFunction);
};

const safeFilter = (value, filterFunction) => {
  if (!value) { return ""; }

  try {
    return filterFunction(value);
  } 
  catch (error) {
    console.warn(`Error applying filter to value: ${error}`);
    return "";
  }
}

module.exports = function(eleventyConfig) {

  const renderRichTextFilter = (value) => safeFilter(value, (richTextValue) => renderRichTextAsHtml(richTextValue, renderRichTextPartial));
  const renderMarkdownFilter = (value) => safeFilter(value, (markdownValue) => markdownIt.renderInline(markdownValue));
  const readableDateFilter = (value) => safeFilter(value, formatDates);
  const readableTimeFilter = (value) => safeFilter(value, formatTime);
  const readableFileSizeFilter = (value) => safeFilter(value, formatFileSize);
  const slugifyFilter = (value) => safeFilter(value, slugify);

  // Contentful rich text
  addSharedFilter(eleventyConfig, "renderRichTextAsHtml", renderRichTextFilter);

  // Markdown (inline)
  addSharedFilter(eleventyConfig, "renderMarkdownAsHtml", renderMarkdownFilter);

  // Date formatting (human readable)
  addSharedFilter(eleventyConfig, "readableDate", readableDateFilter);

  // Time formatting (human readable)
  addSharedFilter(eleventyConfig, "readableTime", readableTimeFilter);

  // File size formatting (human readable)
  addSharedFilter(eleventyConfig, "readableFileSize", readableFileSizeFilter);

  // String formatting
  addSharedFilter(eleventyConfig, "slugify", slugifyFilter);
};