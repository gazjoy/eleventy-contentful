require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { safeParseInt } = require("./helpers");

const CACHE_DIR = path.join(__dirname, "../../../_cache");
const CACHE_TTL_MINS = safeParseInt(process.env.LOCAL_CACHE_TTL_MINS, 60);
const CACHE_JSON_INDENT_SPACES = 2;

/**
 * Fetches data using the provided function, caching the result locally.
 * On subsequent calls within the TTL period, returns the cached data instead of calling the fetch function.
 * @param {string} key - A unique identifier for the cache entry (used as the filename - include "/" for subdirectories if desired)
 * @param {function(): Promise<any>} fetchFn - Async function that fetches the data
 * @returns {Promise<any>} The fetched or cached data
 */
const withJsonCache = async (key, fetchFn) => {
  const cachePath = getCachePath(key);

  if (isCacheValid(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, "utf-8"));
  }

  const data = await fetchFn();
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  fs.writeFileSync(cachePath, `${JSON.stringify(data, null, CACHE_JSON_INDENT_SPACES)}`);
  return data;
};

const getCachePath = (key) => path.join(CACHE_DIR, `${key}.json`);

const isCacheValid = (cachePath) => {
  if (CACHE_TTL_MINS <= 0) {
    console.log(`[cache] cache disabled`);
    return false;
  }

  if (!fs.existsSync(cachePath)) {
    console.log(`[cache] cached file not found; will create at: ${cachePath}`);
    return false;
  }

  const lastModifiedMs = fs.statSync(cachePath).mtimeMs;
  const ageMins = ((Date.now() - lastModifiedMs) / (1000 * 60)).toFixed(1);

  // valid
  if (ageMins < CACHE_TTL_MINS) {
    console.log(
      `[cache] cache valid for: ${cachePath} (age: ${ageMins} mins < ${CACHE_TTL_MINS})`
    );
    return true;
  }
  // invalid
  else {
    console.log(
      `[cache] cache stale for: ${cachePath} (age: ${ageMins} mins > ${CACHE_TTL_MINS})`
    );
    return false;
  }
};

module.exports = { withJsonCache };
