import React from "react";
import userContext from "../context/UserContext";

function UserProfile() {
  const { user } = React.useContext(userContext);
  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default UserProfile;
