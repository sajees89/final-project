// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {faHeart} from '@fortawesome/free-solid-svg-icons';

// function Likebutton({ user, post: { id, likeCount, likes } }) {
//     const [liked, setLiked] = useState(false);
    
//     useEffect(() => {
//         if (user && likes.find((like) => like.username === user.username)) {
//           setLiked(true);
//         } else setLiked(false);
//       }, [user, likes]);

//       const [likePost] = useMutation(LIKE_POST_MUTATION, {
//         variables: { postId: id }
//       });

//       const likeButton = user ? (
//         liked ? (
//           <button color="teal">
//           </button>
//         ) : (
//           <button color="teal" basic>
            
//           </button>
//         )
//       ) : (
//         <button as={Link} to="/login" color="teal" basic>
         
//         </button>
//       );

//   return (
//     <div className='btn'>
//     <button
//     onClick={likePost}>
//     <FontAwesomeIcon icon="fa-solid fa-heart" />
//     <span>{likeCount}</span></button>
//     </div>
//   )
// }

// export default Likebutton