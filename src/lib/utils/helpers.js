const { DateTime } = require("luxon");

/**
 * Splits an array into chunks of the specified size. 
 * The last chunk may be smaller if the array length is not a multiple of the chunk size.
 * @param {any[]} array 
 * @param {number} size 
 */
const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) chunks.push(array.slice(i, i + size));
  return chunks;
};

/**
 * Converts a string into a URL-friendly slug, e.g. "Hello World" -> "hello-world"
 * @param {string} text 
 */
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

/**
 * Options for Luxon DateTime parsing/formatting in UK timezone.
 * Use this whenever creating DateTime objects to ensure consistent timezone handling across the site.
 */
const luxonDateTimeOptions = { zone: "Europe/London" };

/**
 * Produces a Luxon DateTime object in UK timezone from a date string and optional time string.
 * @param {string} dateIsoString Date in ISO format (e.g. "YYYY-MM-DD", "YYYY-MM-DDTHH:mm")
 */
const toUkDateTime = (dateIsoString) => {
  return DateTime.fromISO(dateIsoString, luxonDateTimeOptions);
}

module.exports = {
  chunkArray,
  slugify,
  luxonDateTimeOptions,
  toUkDateTime
};