import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addRecipe(postText: $postText) {
      _id
      postText
      username
<<<<<<< HEAD
=======
      commentCount
      comments {
        _id
      }
>>>>>>> f4051a0a50d951db5eff63459bb8e5e99870823a
    }
  }
`;

<<<<<<< HEAD
// export const ADD_REACTION = gql`
//   mutation addReaction($postId: ID!, $reactionBody: String!) {
//     addReaction(postId: $postId, reactionBody: $reactionBody) {
//       _id
//       reactionCount
//       reactions {
//         _id
//         reactionBody
//         createdAt
//         username
//       }
//     }
//   }
// `;
=======
export const ADD_comment = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
>>>>>>> f4051a0a50d951db5eff63459bb8e5e99870823a
