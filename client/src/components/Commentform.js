import React from "react";
import '../index.css';
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";

const Commentform = ({ postId }) => {
  const [commentBody, setBody] = useState("");
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBody({ ...commentBody, [name]: value });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, postId },
      });

      // clear form value
      setBody("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="Leave a comment to this post..."
          value={commentBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Commentform;
