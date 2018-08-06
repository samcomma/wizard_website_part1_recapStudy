const express = require("express");
const app = express();
const morgan = require('morgan');
const postBank = require('./postBank');
const postDetails = require('./views/postDetails');
const postList = require('./views/postList');

app.use(morgan('dev'));
app.use(express.static('public'))


app.get("/", (req, res) => {
  const posts = postBank.list()
  res.send(postList(posts))
});

app.get("/posts/:id", (req, res) => {
  const post = postBank.find(req.params.id)
  res.send(postDetails(post))
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
