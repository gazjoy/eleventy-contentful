/*
    Maps Contentful assets to the shape we want to use in our templates.
    Please keep in alphabetical order for easier maintenance.
*/

/**
 * @typedef {Object} File
 * @property {string} id
 * @property {string} url
 * @property {string} title
 * @property {string} description
 * @property {string} fileName
 * @property {string} contentMimeType
 * @property {number} fileSizeBytes
 */

/**
 * @typedef {Object} Image
 * @property {string} id
 * @property {string} url
 * @property {string} title
 * @property {string} description - can be used for alt text
 * @property {string} fileName
 * @property {string} contentMimeType
 * @property {number} fileSizeBytes
 * @property {number} widthPx
 * @property {number} heightPx
 */

/**
 * @param {Object} asset - raw Contentful asset
 * @returns {File|null} mapped file, or null
 */
const mapFile = (asset) => {
  return asset
    ? {
        id: asset.sys.id,
        url: asset.fields.file.url,
        title: asset.fields.title,
        description: asset.fields.description,
        fileName: asset.fields.file.fileName,
        contentMimeType: asset.fields.file.contentType,
        fileSizeBytes: asset.fields.file.details?.size || NaN,
      }
    : null;
};

/**
 * @param {Object} asset - raw Contentful asset
 * @returns {Image|null} mapped image, or null
 */
const mapImage = (asset) => {
  const file = mapFile(asset);

  return file
    ? {
        ...file,
        widthPx: asset.fields.file.details?.image?.width || NaN,
        heightPx: asset.fields.file.details?.image?.height || NaN,
      }
    : null;
};

module.exports = {
  mapFile,
  mapImage,
};
