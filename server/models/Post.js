const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a deed!',
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Post = model('Post', postSchema);

module.exports = Post;