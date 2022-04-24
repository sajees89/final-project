// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type User {
  _id: ID
  email: String
  token: String
  username: String
  createdAt: String
}

type Post {
  _id: ID
  PostBody: String
  username: String
}

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Like {
    _id: ID
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(body: String!): Post
    likePost(postId: ID!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;