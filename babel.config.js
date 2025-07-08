// babel.config.js
module.exports = function(api) {
  api.cache(true); // Cache the config for faster builds
  return {
    presets: ['babel-preset-expo'], // This preset includes @babel/preset-react
  };
};