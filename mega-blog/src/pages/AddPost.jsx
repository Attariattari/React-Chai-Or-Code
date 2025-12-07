import React from "react";
import PostForm from "../Components/post-form/PostForm";
import { Container } from "../Components";
import appwriteservice from "../appwrite/config";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
