require("dotenv").config();

module.exports = async function () {
  const config = {
    siteUrl: process.env.SITE_URL || "",
    allowRobots: process.env.ALLOW_ROBOTS === "true",
  };

  return config;
};
