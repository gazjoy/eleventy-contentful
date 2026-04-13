require('dotenv').config();

module.exports = async function () {
  const config = {
    allowRobots: process.env.ALLOW_ROBOTS === 'true'
  };

  return config;
};