/* app.js */

// require and instantiate express
const app = require('express')(),
 cfgManager = require('./config'),
 serviceConfig = cfgManager.getConfig('server'),
 display_decider = require('./helpers/display_decider');

// set the view engine to ejs
app.set('view engine', 'ejs');

require('./helpers/notify')();

app.get('/', (req, res) => {
  
  display_decider(req.ip,function(displayList){
      res.render('home', { bannerList: displayList});
  })
})

app.listen(serviceConfig.port, serviceConfig.host, function () {
  console.info('listening at host %s and port %s',serviceConfig.host,serviceConfig.port );
});
