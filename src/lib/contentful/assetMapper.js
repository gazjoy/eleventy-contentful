/*
    Maps Contentful assets to the shape we want to use in our templates.
    Please keep in alphabetical order for easier maintenance.
*/

const mapFile = (asset) => {
  return asset ? {
    id: asset.sys.id,
    url: asset.fields.file.url,
    title: asset.fields.title,
    description: asset.fields.description,
    fileName: asset.fields.file.fileName,
    contentType: asset.fields.file.contentType,
    fileSize: asset.fields.file.details?.size || 0,
  } : null;
};

const mapImage = (asset) => {
  const file = mapFile(asset);

  return file ? {
    ...file,
    width: asset.fields.file.details?.image?.width || null,
    height: asset.fields.file.details?.image?.height || null,
  } : null;
};

module.exports = {
  mapFile,
  mapImage,
};
