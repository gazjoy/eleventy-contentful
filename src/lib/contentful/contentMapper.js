const { toUkDateTime } = require("../utils/helpers");
const { mapComponents } = require("./componentMapper");
const { mapImage } = require("./assetMapper");

/*
    Maps Contentful content entries to the shape we want to use in our templates.
    Please keep in alphabetical order for easier maintenance.
*/

/**
 * @typedef {import('./assetMapper.js').Image} Image
 * @typedef {import('./componentMapper.js').ImageFeatureComponent} ImageFeatureComponent
 * @typedef {import('./componentMapper.js').LatestNewsComponent} LatestNewsComponent
 */

/**
 * @typedef {Object} Location
 * @property {number} lat
 * @property {number} lon
 */

/**
 * @typedef {Object} CommitteeRole
 * @property {string} id
 * @property {string} title
 * @property {string} descriptionMarkdown
 * @property {string[]} memberNames - empty if position vacant
 * @property {string} emailAddress
 */

/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {Object} startDate - Luxon DateTime
 * @property {string} startTime in ISO format ("HH:mm")
 * @property {Object} endDate - Luxon DateTime
 * @property {Object} descriptionRichText
 * @property {Venue} venue
 * @property {string} websiteUrl
 */

/**
 * @typedef {Object} Homepage
 * @property {string} title
 * @property {(ImageFeatureComponent|LatestNewsComponent)[]} components
 */

/**
 * @typedef {Object} NewsPost
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {Object} date - Luxon DateTime
 * @property {Object} bodyRichText
 * @property {string} authorName
 */

/**
 * @typedef {Object} Page
 * @property {string} id
 * @property {string} title
 * @property {string} urlPath - full URL path including parent paths
 * @property {string|null} parentUrlPath - URL path of parent page, or null if root
 * @property {Page[]} childPages
 * @property {Object} lastUpdatedDate - Luxon DateTime
 * @property {Object} bodyRichText
 */

/**
 * @typedef {Object} Session
 * @property {string} id
 * @property {string} title
 * @property {string} day - e.g. "Monday"
 * @property {string} activity
 * @property {Venue} venue
 * @property {string} startTime in ISO format ("HH:mm")
 * @property {string} endTime in ISO format ("HH:mm")
 * @property {string[]} squadsIds
 */

/**
 * @typedef {Object} Squad
 * @property {string} id
 * @property {string} name
 * @property {Object} descriptionRichText
 * @property {Object|null} timetable
 */

/**
 * @typedef {Object} StaffMember
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {Image|null} photo
 * @property {Object} biographyRichText
 */

/**
 * @typedef {Object} Venue
 * @property {string} id
 * @property {string} name
 * @property {Location} location
 * @property {string} phoneNumber
 * @property {string} websiteUrl
 */

const getFullPagePath = (page) => {
  if (page.fields.parentPage) {
    const parentPath = getFullPagePath(page.fields.parentPage);
    return `${parentPath}/${page.fields.slug}`;
  }
  return page.fields.slug;
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {CommitteeRole}
 */
const mapCommitteeRole = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    descriptionMarkdown: entry.fields.description,
    memberNames: entry.fields.members || [],
    emailAddress: entry.fields.email,
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Event}
 */
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
    websiteUrl: entry.fields.eventInformationLink,
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Homepage}
 */
const mapHomepage = (entry) => {
  return {
    title: entry.fields.title,
    components: mapComponents(entry.fields.components)
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {NewsPost}
 */
const mapNewsPost = (entry) => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: toUkDateTime(entry.fields.postingDate || entry.sys.createdAt),
    bodyRichText: entry.fields.body,
    authorName: entry.fields.author || "Phoenix Swimming Club",
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Page}
 */
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

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Session}
 */
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

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Squad}
 */
const mapSquad = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    descriptionRichText: entry.fields.description,
    timetable: null, // will be populated in buildTimetableForSquad (see squads.js)
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {StaffMember}
 */
const mapStaffMember = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    role: entry.fields.role,
    photo: mapImage(entry.fields.photo),
    biographyRichText: entry.fields.biography,
  };
};

/**
 * @param {Object} entry - raw Contentful entry
 * @returns {Venue}
 */
const mapVenue = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    location: entry.fields.location, // { lat, lon }
    phoneNumber: entry.fields.phoneNumber,
    websiteUrl: entry.fields.website,
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
