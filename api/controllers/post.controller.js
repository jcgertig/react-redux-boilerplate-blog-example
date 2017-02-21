const assign = require('lodash.assign');
const { Post } = require('../models');

function getPosts(req, res) {
  Post.findAll()
    .then((posts) => {
      res.send({
        posts,
      });
    });
}

function createPost(req, res) {
  Post.create(req.body.post)
    .then((post) => {
      res.send({
        post,
      });
    });
}

function getPost(req, res) {
  Post.findById(req.params.postId)
    .then((post) => {
      res.send({
        post,
      });
    });
}

function updatePost(req, res) {
  const data = assign({ id: req.params.postId }, req.body.post);
  Post.update(data, { where: { id: req.params.postId } })
    .then(() => {
      Post.findById(req.params.postId)
        .then((post) => {
          res.send({
            post,
          });
        });
    });
}

function deletePost(req, res) {
  Post.destroy({ where: { id: req.params.postId } })
    .then((post) => {
      res.send({
        post,
      });
    });
}

module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
