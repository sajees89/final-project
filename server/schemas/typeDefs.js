// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  posts: [Post]
}

type Post {
  _id: ID
  postText: String!
  username: String!
  createdAt: String!
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
  addPost(postText: String!): Post
}
`;

// export the typeDefs
module.exports = typeDefs;