/* app.js */

// require and instantiate express
const app = require('express')();
const cfgManager = require('./config');

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    title: 'Promotion Banner One',
    visibleFrom:'2014-08-10T12:00:00+0900',
    visibleTo:'2014-08-10T12:00:00+0900'
  },
  {
    id: 2,
    title: 'Promotion Banner Two',
    visibleFrom:'2014-08-10T12:00:00+0900',
    visibleTo:'2014-08-10T12:00:00+0900'
  },
  {
    id: 3,
    title: 'Promotion Banner Three',
    visibleFrom:'2014-08-10T12:00:00+0900',
    visibleTo:'2014-08-10T12:00:00+0900'
  },
  {
    id: 4,
    title: 'Promotion Banner Four',
    visibleFrom:'2014-08-10T12:00:00+0900',
    visibleTo:'2014-08-10T12:00:00+0900'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')


// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    title: post.title,
  })
})

app.listen(8080)

require('./helpers/notify')();

console.log('listening on port 8080')
