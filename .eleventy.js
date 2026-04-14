const { renderRichTextAsHtml } = require("./src/lib/contentful/richTextRenderer");
const { formatDates } = require("./src/lib/utils/formatters");

module.exports = function(eleventyConfig) {

  // Contentful rich text
  eleventyConfig.addFilter("renderRichTextAsHtml", renderRichTextAsHtml);

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", formatDates);

  // Copy all static files to output
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

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