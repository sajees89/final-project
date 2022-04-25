// import React from 'react';
// import { useState} from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_POST} from '../../utils/mutations';
// import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

//   const PostDeed = () => {
//     const PostForm = () => {
//       const [postText, setText] = useState('');
//       onst [addPost, { error }] = useMutation(ADD_POST, {
//         update(cache, { data: { addPost } }) {
//           try {
//             // update post array's cache
//             // could potentially not exist yet, so wrap in a try/catch
//             const { posts } = cache.readQuery({ query: QUERY_POSTS});
//             cache.writeQuery({
//               query: QUERY_POSTS,
//               data: { posts: [addPost, ...posts] },
//             });
//           } catch (e) {
//             console.error(e);
//           }
    
//           // update me object's cache
//           const { me } = cache.readQuery({ query: QUERY_ME });
//           cache.writeQuery({
//             query: QUERY_ME,
//             data: { me: { ...me, posts: [...me.posts, addPost] } },
//           });
//         },
//       });
//       const handleChange = (event) => {  

//     return (
//       <div className="create-post">
//         <div className="post-container">
//           <h1>Post A Good Deed</h1>
         
//           <div className="post-body">
//             <label> Share Your Story :</label>
//             <textarea
//               placeholder="Post your story"
//               // onChange={(event) => {
//               //   setPostText(event.target.value);
//               // }}
//             />
//           </div>
//           <button className='btn' type='submit'> Submit Post</button>
//         </div>
//       </div>
//     );
//   }
  

// export default PostDeed;