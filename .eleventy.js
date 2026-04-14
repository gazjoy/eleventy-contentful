const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { INLINES } = require('@contentful/rich-text-types');
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Contentful rich text
  eleventyConfig.addFilter('renderRichTextAsHtml', (value, linkLookups) => {
    if (!value) {
      return "";
    }

    return documentToHtmlString(value, {
      renderNode: {
        [INLINES.ENTRY_HYPERLINK]: (node) => {
          const target = node?.data?.target;
          const targetId = target?.sys?.id;

          const resolvedPage = linkLookups?.pages?.get?.(targetId);
          if (resolvedPage) {
            const linkText = node.content?.[0]?.value || resolvedPage.title;
            return `<a href="/${resolvedPage.urlPath}/">${linkText}</a>`;
          }

          const resolvedLocation = linkLookups?.locations?.get?.(targetId);
          if (resolvedLocation) {
            const linkText = node.content?.[0]?.value || resolvedLocation.name;

            if (resolvedLocation.website) {
              return `<a href="${resolvedLocation.website}">${linkText}</a>`;
            }
            return linkText; // no link if no website provided
          }
          
          console.warn(`Could not resolve linked entry with ID ${targetId}`);
          if (node.content?.[0]?.value) {
            return node.content[0].value; // fallback to link text if available
          }
          return `<!-- Unresolved link to entry with ID ${targetId} -->`;
        }
      }
    });
  });

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    if (!dateObj) {
      return "";
    }
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Event time formatting (human readable)
  eleventyConfig.addFilter("readableEventTime", (startTime, endTime) => {
    if (!startTime) {
      return "";
    }
    const start = DateTime.fromJSDate(startTime);
    const startString = start.toFormat("dd LLL yyyy, HH:mm");

    if (!endTime) {
      return startString;
    }

    const end = DateTime.fromJSDate(endTime);
    let endString = end.toFormat("dd LLL yyyy, HH:mm");

    if (start.hasSame(end, "day")) {
      endString = end.toFormat("HH:mm");
    }

    return `${startString} - ${endString}`;
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