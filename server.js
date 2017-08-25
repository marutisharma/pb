/* app.js */

// require and instantiate express
const app = require('express')();
const cfgManager = require('./config');
const display_decider = require('./helpers/display_decider');
const posts = require('./config/banners').list;

// set the view engine to ejs
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  var displayList;
  display_decider(posts,'10.204.52.222',function(posts){
    displayList=posts;
  })
  res.render('home', { posts: displayList});
})

app.get('/post/:id', (req, res) => {
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  res.render('post', {
    title: post.title,
  })
})

app.listen(8080);

require('./helpers/notify')();

console.log('listening on port 8080')
