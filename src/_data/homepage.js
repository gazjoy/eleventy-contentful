const { deliveryApiClient } = require("../../contentful/client");

module.exports = async function () {
  console.log("Fetching homepage from Contentful...");

  const response = await deliveryApiClient.getEntries({ 
    content_type: "homepage",
    limit: 1
  });
  //console.log(`*** Response: ${JSON.stringify(response)}`);

  const homepage = response.items
    .map(i => mapHomepage(i))[0]; // we expect exactly one homepage entry
  //console.log(`*** Mapped homepage: ${JSON.stringify(homepage)}`);

  console.log(`... fetched homepage.`);
  return homepage;
};

const mapHomepage = (entry) => {
  return {
    title: entry.fields.title,
    components: entry.fields.components.map(c => mapComponent(c))
  };
}

// TODO: extend to support other components, and move to a shared utils file 
const mapComponent = (component) => {
  const type = component.sys.contentType.sys.id;
  const fields = component.fields;

  switch (type) {
    case "componentImageFeature":
      return {
        type,
        title: fields.title,
        imageUrl: fields.image.fields.file.url,
        imageAlt: fields.image.fields.title,
        contentRichText: fields.featureContent
      };
    case "componentLatestNews":
      return {
        type,
        title: fields.title,
        numberOfPosts: fields.numberOfPosts
      };
    }
  }