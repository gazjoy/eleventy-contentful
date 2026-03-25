const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Contentful rich text
  eleventyConfig.addFilter('renderRichTextAsHtml', (value) => {
    return documentToHtmlString(value);
  });

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

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