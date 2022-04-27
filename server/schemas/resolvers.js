const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('posts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('posts');
      },
      posts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Post.find(params).sort({ createdAt: -1 });
      },
      post: async (parent, { _id }) => {
        return Post.findOne({ _id });
      }
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      addPost: async (parent, args, context) => {
        if (context.user) {
          const post = await Post.create({ ...args, username: context.user.username });
  
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { posts: post._id } },
            { new: true }
          );
  
          return post;
        }
  
        throw new AuthenticationError('You need to be logged in!');
      },
      addStar: async (parent, { postId, starBody }, context) => {
        if (context.user) {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $push: { stars: { starBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
  
          return updatedPost;
        }
  
        throw new AuthenticationError('You need to be logged in!');
       },
        deletePost: async (parent, { postId }, context) => {
          if (context.user) {
            const post = await Post.findOneAndDelete({ _id: postId });
  
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $pull: { posts: postId } },
              { new: true }
            );
  
            return post;
          }
  
          throw new AuthenticationError('You need to be logged in!');
        }  
    }
};

module.exports = resolvers;
  
