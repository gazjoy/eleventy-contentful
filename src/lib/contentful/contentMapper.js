/*
    Maps Contentful content entries to the shape we want to use in our templates.
*/

const mapLocation = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    location: entry.fields.location, // { lat, lon }
    phoneNumber: entry.fields.phoneNumber,
    website: entry.fields.website,
  };
};

const mapNewsPost = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: new Date(entry.fields.postingDate || entry.sys.createdAt),
    bodyRichText: entry.fields.body,
    authorName: entry.fields.author.fields.name
  };
};

const mapEvent = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    startDate: new Date(entry.fields.startDate),
    endDate: entry.fields.endDate ? new Date(entry.fields.endDate) : null,
    descriptionRichText: entry.fields.description,
    location: mapLocation(entry.fields.location),
  };
};

const mapHomepage = (entry) => {
  const { mapComponents } = require("./componentMapper");
  return {
    title: entry.fields.title,
    components: mapComponents(entry.fields.components)
  };
};

const mapPage = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    urlPath: getFullPagePath(entry),
    parentUrlPath: entry.fields.parentPage ? getFullPagePath(entry.fields.parentPage) : null,
    childPages: [], // will be populated in buildHierarchy (see pages.js)
    lastUpdatedDate: new Date(entry.sys.updatedAt || entry.sys.createdAt),
    bodyRichText: entry.fields.pageContent
  };
};

const getFullPagePath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPagePath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
};

module.exports = {
  mapLocation,
  mapNewsPost,
  mapEvent,
  mapHomepage,
  mapPage,
};
