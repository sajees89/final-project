const { Schema, model } = require('mongoose');
const starSchema = require('./Star');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a deed!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    stars: [starSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Post = model('Post', postSchema);

module.exports = Post;