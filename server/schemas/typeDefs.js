// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Post {
    _id: ID
    body: String
    createdAt: String
    username: String
    comments: [Comment]
    likes: [Like]
    likeCount: Int
    commentCount: Int
  }

  type Comment {
    _id: ID
    createdAt: String
    username: String
    body: String
  }

  type Like {
    _id: ID
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    email: String
    token: String
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPost(body: String!): Post
    deletePost(postId: ID!): Post
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post
    likePost(postId: ID!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;