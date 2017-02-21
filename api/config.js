const bodyParser = require('body-parser');
const models = require('./models');
const postController = require('./controllers/post.controller');

const jsonParser = bodyParser.json();

module.exports = function config(app, cb) {
  app.get('/api/v1/posts', jsonParser, postController.getPosts);
  app.post('/api/v1/posts', jsonParser, postController.createPost);
  app.get('/api/v1/posts/:postId', jsonParser, postController.getPost);
  app.put('/api/v1/posts/:postId', jsonParser, postController.updatePost);
  app.delete('/api/v1/posts/:postId', jsonParser, postController.deletePost);

  models.sequelize.sync().then(cb);
};
