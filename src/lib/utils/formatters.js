const { DateTime } = require("luxon");
const { luxonDateTimeOptions } = require("./helpers");

// see https://moment.github.io/luxon/#/formatting?id=table-of-tokens
const DAY = "EEEE d"; // Wednesday 4
const DAY_MONTH = "EEEE d LLLL"; // Wednesday 4 August
const DAY_MONTH_YEAR = "EEEE d LLLL yyyy"; // Wednesday 4 August 2021

/**
 * Formats a date or date range in a human-readable format
 * @param {DateTime} startDate The start date of the event
 * @param {DateTime} endDate The end date of the event (optional)
 */
const formatDates = (startDate, endDate = null) => {
  if (!endDate || (startDate.hasSame(endDate, "day"))) {
    return startDate.toFormat(DAY_MONTH_YEAR);
  }

  if (startDate.hasSame(endDate, "month")) {
    return `${startDate.toFormat(DAY)} - ${endDate.toFormat(DAY_MONTH_YEAR)}`;
  }

  if (startDate.hasSame(endDate, "year")) {
    return `${startDate.toFormat(DAY_MONTH)} - ${endDate.toFormat(DAY_MONTH_YEAR)}`;
  }

  return `${startDate.toFormat(DAY_MONTH_YEAR)} - ${endDate.toFormat(DAY_MONTH_YEAR)}`;
};

/**
 * Formats a time in a human-readable format
 * @param {string} timeString A time string in 24-hour format, e.g. "18:30"
 */
const formatTime = (timeString) => {
  // Use an arbitrary date since we only care about the time component
  const dateTime = DateTime.fromISO(`2000-01-01T${timeString}:00`, luxonDateTimeOptions);
  return dateTime.toFormat("h:mma").toLowerCase(); // e.g. 18:30 -> 6:30pm
};

/** 
 * Formats a file size in a human-readable format, e.g. 1.23 MB
 * @param {number} sizeInBytes The file size in bytes
 * @param {number} decimalPlaces The number of decimal places to include for KB and MB (default: 1)
 */
const formatFileSize = (sizeInBytes, decimalPlaces = 1) => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} bytes`;
  } else if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(decimalPlaces)} KB`; 
  } else {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(decimalPlaces)} MB`;
  }
}

module.exports = {
  formatDates,
  formatTime,
  formatFileSize
};
