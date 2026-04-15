/*
  Maps Contentful component entries to the shape we want to use in our templates.
  Please keep in alphabetical order by content type for easier maintenance.
*/

const mapComponent = (component) => {
  const type = component?.sys?.contentType?.sys?.id;
  const fields = component?.fields || {};

  switch (type) {
    case "componentImageFeature":
      return {
        type,
        title: fields.title,
        imageUrl: fields.image?.fields?.file?.url,
        imageAlt: fields.image?.fields?.title,
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

const mapComponents = (components = []) => components
    .map((c) => mapComponent(c))
    .filter(c => c !== undefined);

module.exports = {
  mapComponent,
  mapComponents,
};