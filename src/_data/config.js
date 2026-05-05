require("dotenv").config();

module.exports = async function () {
  const commitRef = process.env.COMMIT_REF || "local";

  const config = {
    siteUrl: process.env.SITE_URL || "",
    allowRobots: process.env.ALLOW_ROBOTS === "true",
    responseHeaders: {
      "X-Commit-Ref": commitRef.slice(0, 7),
    },
  };

  return config;
};
