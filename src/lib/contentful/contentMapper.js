const { mapComponents } = require("./componentMapper");
const { mapImageField } = require("./mappingUtils");

/*
    Maps Contentful content entries to the shape we want to use in our templates.
    Please keep in alphabetical order by content type for easier maintenance.
*/

const getFullPagePath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPagePath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
};

const mapEvent = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    startDate: new Date(entry.fields.startDate),
    endDate: entry.fields.endDate ? new Date(entry.fields.endDate) : null,
    descriptionRichText: entry.fields.description,
    venue: mapVenue(entry.fields.venue),
    website: entry.fields.eventInformationLink
  };
};

const mapHomepage = (entry) => {
  return {
    title: entry.fields.title,
    components: mapComponents(entry.fields.components)
  };
};

const mapNewsPost = (entry) => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: new Date(entry.fields.postingDate || entry.sys.createdAt),
    bodyRichText: entry.fields.body,
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

const mapSession = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    day: entry.fields.day,
    activity: entry.fields.activity,
    venue: mapVenue(entry.fields.venue),
    startTime: entry.fields.startTime,
    endTime: entry.fields.endTime,
    squadsIds: entry.fields.squads?.map(squad => squad.sys.id) || [], // only need IDs here
  };
};

const mapSquad = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    descriptionRichText: entry.fields.description,
    timetable: null, // will be populated in buildTimetableForSquad (see squads.js)
  };
};

const mapStaffMember = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    role: entry.fields.role,
    photo: mapImageField(entry.fields.photo, entry.fields.name),
    biographyRichText: entry.fields.biography,
  };
};

const mapVenue = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    location: entry.fields.location, // { lat, lon }
    phoneNumber: entry.fields.phoneNumber,
    website: entry.fields.website,
  };
};

module.exports = {
  mapEvent,
  mapHomepage,
  mapNewsPost,
  mapPage,
  mapSession,
  mapSquad,
  mapStaffMember,
  mapVenue,
};
