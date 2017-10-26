'use strict';
// global.IP = require('./../config/ip.json').list;
// global.BANNERS = require('./../config/banners').list;
const global = require("./../config/global.js");

module.exports = function fileWatcher(reqIp, callback) {
  var displayBannerList=[],visibleFrom,visibleTo,currentTime;
  if(global.BANNERS==null){
    global.BANNERS = require('./../config/banners').list;
  }
  if(global.IP==null){
    global.IP=require('./../config/ip').list;
  }

  global.BANNERS.forEach(function(element){
    visibleFrom = Date.parse(element.visibleFrom);
    visibleTo =   Date.parse(element.visibleTo);
    currentTime = Date.now();

    if(global.IP.indexOf(reqIp) > -1){
      if(currentTime < visibleTo){
        displayBannerList.push(element);
      }
    }
    else{
      if(currentTime > visibleFrom && currentTime < visibleTo){
        displayBannerList.push(element);
      }
    }

  });
  callback(displayBannerList);
};
