'use strict';
var IP = require('./../config/ip.json').list;
var BANNERS = require('./../config/banners').list;

module.exports = function fileWatcher(reqIp, callback) {
  var displayBannerList=[],visibleFrom,visibleTo,currentTime;
  if(BANNERS==null){
    BANNERS = require('./../config/banners').list;
  }
  if(IP==null){
    IP=require('./../config/ip').list;
  }

  BANNERS.forEach(function(element){
    visibleFrom = Date.parse(element.visibleFrom);
    visibleTo =  Date.parse(element.visibleTo);
    currentTime = Date.now();

    if(IP.indexOf(reqIp) > -1){
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
  IP=null;
  BANNERS=null;
  callback(displayBannerList);
};
