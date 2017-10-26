'use strict';

const watch = require('node-watch'),
path = require('path'),
fs = require('fs'),
cfgManager = require('node-config-manager'),
filesToBeWatched = cfgManager.getConfig('app').filesToBeWatched,
global = require("./../config/global.js");


function startFileWatch() {
  //Observe files in location filesToBeWatched.files for any changes in file content
  watch(filesToBeWatched.location, function (file) {
   filesToBeWatched.files.forEach(function(element){
     delete require.cache[global.CONFIG_DIR +'/'+ element];
     global.BANNERS=null;
     global.IP=null;
   })
  });
}

module.exports = function fileWatcher() {
  fs.stat(filesToBeWatched.location, function (error) {
    if (error) { //Path does not exist
      fs.mkdir(filesToBeWatched.location, function (err) { //Create the location
        if (err) {
          throw new Error(err);
        } else {
          startFileWatch();
        }
      });
    } else { //Path exist, so watch files
      startFileWatch();
    }
  });
};
