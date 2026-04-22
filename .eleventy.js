const markdownIt = require("markdown-it")();
const { renderRichTextAsHtml } = require("./src/lib/contentful/richTextRenderer");
const { formatDates, formatTime } = require("./src/lib/utils/formatters");
// const CleanCSS = require("clean-css");

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

  // Contentful rich text
  eleventyConfig.addFilter("renderRichTextAsHtml",  (value) => safeFilter(value, renderRichTextAsHtml));

  // Markdown (inline)
  eleventyConfig.addFilter("renderMarkdownAsHtml",  (value) => safeFilter(value, markdownIt.renderInline));

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", (value) => safeFilter(value, formatDates));

  // Time formatting (human readable)
  eleventyConfig.addFilter("readableTime", (value) => safeFilter(value, formatTime));

  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "src/static/images": "/images" });
  eleventyConfig.addPassthroughCopy({ "src/static/js": "/js" });

  return {
    templateFormats: ["md", "njk", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};