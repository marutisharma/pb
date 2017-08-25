'use strict';

//Initializing config manager
const cfgManager = require('node-config-manager');

(function initializeConfig() {
  //Initializing config manager
  cfgManager.init({
      configDir: './config',
      env: process.env.NODE_ENV || 'development',
      camelCase: true
    }).addConfig('app');
  })();

module.exports = cfgManager;
