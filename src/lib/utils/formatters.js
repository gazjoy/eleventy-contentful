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

module.exports = {
  formatDates,
};
