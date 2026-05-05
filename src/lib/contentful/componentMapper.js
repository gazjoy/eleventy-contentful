const { mapImage } = require("./assetMapper");

/*
  Maps Contentful component entries to the shape we want to use in our templates.
  Please keep in alphabetical order by content type for easier maintenance.
*/

/**
 * @typedef {import('./assetMapper.js').Image} Image
 */

/**
 * @typedef {Object} ImageFeatureComponent
 * @property {string} type - "componentImageFeature"
 * @property {Object} title
 * @property {Image|null} image
 * @property {Object} contentRichText
 * @property {boolean} imageOnLeft
 */

/**
 * @typedef {Object} LatestNewsComponent
 * @property {string} type - "componentLatestNews"
 * @property {Object} title
 * @property {number} numberOfPosts
 */

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {ImageFeatureComponent|LatestNewsComponent|undefined}
 */
const mapComponent = (entry) => {
  const type = entry?.sys?.contentType?.sys?.id;
  const fields = entry?.fields || {};

  switch (type) {
    case "componentImageFeature":
      return {
        type,
        title: fields.title,
        image: mapImage(fields.image),
        contentRichText: fields.featureContent,
        imageOnLeft: fields.imageOnLeft ?? true,
      };

    case "componentLatestNews":
      return {
        type,
        title: fields.title,
        numberOfPosts: fields.numberOfPosts,
      };

    default:
      console.warn(`! Component type '${type}' unhandled in componentMapper.js`);
      return undefined;
  }
};

/**
 * @param {Object[]} components - array of raw Contentful component entries
 * @returns {Component[]} array of mapped components, with undefined entries filtered out
 */
const mapComponents = (components = []) =>
  components.map((c) => mapComponent(c)).filter((c) => c !== undefined);

module.exports = {
  mapComponent,
  mapComponents,
};
