import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="border w-full p-4 rounded-md overflow-hidden shadow-md hover:shadow-lg duration-200">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-auto object-cover rounded-md"
          />
          <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
