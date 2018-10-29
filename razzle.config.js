'use strict';

module.exports = {
  plugins: ['typescript'],

  modify(config) {
    const appConfig = config; // stay immutable here

    // AMD should be turned off by default, since some libraries (like swagger codegen)
    // generate node libraries that have issues with AMD
    appConfig.module.rules.push({
      parser: {
        amd: false
      }
    });

    return appConfig;
  },
};