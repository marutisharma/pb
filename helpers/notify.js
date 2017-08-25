'use strict';

const watch = require('node-watch'),
path = require('path'),
fs = require('fs'),
cfgManager = require('node-config-manager'),
filesToBeWatched = cfgManager.getConfig('app').filesToBeWatched;

function startFileWatch() {
  //Observe files in location filesToBeWatched.files for any changes in file content
  console.info('Started watching files in %s for any changes..', filesToBeWatched.location);
  watch(filesToBeWatched.location, function (file) {
    console.log('%s got modified', file);
  });
}

module.exports = function fileWatcher() {
  fs.stat(filesToBeWatched.location, function (error) {
    console.log('Error'+ error)
    if (error) { //Path does not exist
      fs.mkdir(filesToBeWatched.location, function (err) { //Create the location
        if (err) {
          console.error('Unable to create directory %s: %s', filesToBeWatched.location, err);
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
