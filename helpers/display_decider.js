'use strict';
const IP = require('./../config/ip.json');

module.exports = function fileWatcher(banners,reqIp, callback) {
    console.log('Requested UserIP '+reqIp);
    var displayBannerList=[],visibleFrom,visibleTo,currentTime;
    banners.forEach(function(element){
      visibleFrom = Date.parse(element.visibleFrom);
      visibleTo =  Date.parse(element.visibleTo);
      currentTime = Date.now();

      if(IP.list.indexOf(reqIp) > -1){
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
