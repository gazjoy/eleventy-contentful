const filters = require("./src/lib/eleventy/filters.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(filters);

  // Use original files (don't copy) when running locally
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  // Copy static files to output (when building for production)
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addPassthroughCopy({ "src/js": "/js" });
  eleventyConfig.addPassthroughCopy({ "src/css/components": "/css/components" });

  return {
    templateFormats: ["md", "njk", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
