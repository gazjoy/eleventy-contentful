
const mapImageField = (imageField, altTextFallback) => {
  return imageField ? {
      url: imageField.fields.file.url,
      alt: imageField.fields.title || altTextFallback
    } : null
};

module.exports = {
  mapImageField
};