import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
    
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      starCount
      stars {
        _id
        createdAt
        username
        starBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        starCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        starCount
        stars {
          _id
          createdAt
          starBody
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
