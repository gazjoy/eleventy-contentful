require("dotenv").config();

module.exports = async function () {
  // this uses an env var created by Netlify during the build
  const commitRef = process.env.COMMIT_REF || "local";

  const config = {
    allowRobots: process.env.ALLOW_ROBOTS === "true",
    responseHeaders: {
      "X-Commit-Ref": commitRef.slice(0, 7),
    },
    siteUrl: process.env.SITE_URL || "",
  };

  return config;
};
