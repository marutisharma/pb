'use strict';


module.exports = function fileWatcher(banners,reqIp, callback) {
    var displayBannerList=[],visibleFrom,visibleTo,currentTime;
    banners.forEach(function(element){
      visibleFrom = Date.parse(element.visibleFrom)
      visibleTo =  Date.parse(element.visibleTo)
      currentTime = Date.now()
      if(currentTime > visibleFrom && currentTime < visibleTo){
          displayBannerList.push(element);
      }
    });
    callback(displayBannerList);
};
