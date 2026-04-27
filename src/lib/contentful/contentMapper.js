const { toUkDateTime } = require("../utils/helpers");
const { mapComponents } = require("./componentMapper");
const { mapImage } = require("./assetMapper");

/*
    Maps Contentful content entries to the shape we want to use in our templates.
    Please keep in alphabetical order for easier maintenance.
*/

const getFullPagePath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPagePath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
};

const mapCommitteeRole = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    descriptionMarkdown: entry.fields.description,
    members: entry.fields.members || [], // array of member names, e.g. ["Jane Doe", "John Smith"] or [] if vacant
    email: entry.fields.email,
  };
};

const mapEvent = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    startDate: toUkDateTime(entry.fields.startDate),
    startTime: entry.fields.startTime,
    endDate: toUkDateTime(entry.fields.endDate || entry.fields.startDate),
    descriptionRichText: entry.fields.description,
    venue: mapVenue(entry.fields.venue),
    website: entry.fields.eventInformationLink,
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
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: toUkDateTime(entry.fields.postingDate || entry.sys.createdAt),
    bodyRichText: entry.fields.body,
    author: entry.fields.author || "Phoenix Swimming Club",
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
    photo: mapImage(entry.fields.photo),
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
  mapCommitteeRole,
  mapEvent,
  mapHomepage,
  mapNewsPost,
  mapPage,
  mapSession,
  mapSquad,
  mapStaffMember,
  mapVenue,
};
