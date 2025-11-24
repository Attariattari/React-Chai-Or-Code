import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const userId = useParams().userId;
  return (
    <div className="text-3xl font-bold p-4 text-orange-700 bg-orange-700/10 m-4 rounded-lg">
      User {userId}
    </div>
  );
}

export default User;
