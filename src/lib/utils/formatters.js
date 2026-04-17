const { DateTime } = require("luxon");

const DAY = "dd";
const DAY_MONTH = "dd LLL";
const DAY_MONTH_YEAR = "dd LLL yyyy";

/** Formats a date or date range in a human-readable format, e.g. 01-05 Jan 2020*/
const formatDates = (startDate, endDate) => {
  const start = startDate ? DateTime.fromJSDate(startDate) : null;
  const end = endDate ? DateTime.fromJSDate(endDate) : null;
  
  if (!start) {
    return "";
  }

  if (!end || (start.hasSame(end, "day"))) {
    return start.toFormat(DAY_MONTH_YEAR);
  }

  if (start.hasSame(end, "month")) {
    return `${start.toFormat(DAY)}-${end.toFormat(DAY_MONTH_YEAR)}`;
  }

  if (start.hasSame(end, "year")) {
    return `${start.toFormat(DAY_MONTH)} - ${end.toFormat(DAY_MONTH_YEAR)}`;
  }

  return `${start.toFormat(DAY_MONTH_YEAR)} - ${end.toFormat(DAY_MONTH_YEAR)}`;
};

/** Formats a file size in a human-readable format, e.g. 1.23 MB */
formatFileSize = (sizeInBytes, decimalPlaces = 0) => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} bytes`;
  } else if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(decimalPlaces)} KB`; 
  } else {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
  }
}

module.exports = {
  formatDates,
  formatFileSize
};
