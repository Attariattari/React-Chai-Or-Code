import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../Store/AuthSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div
      onClick={logouthandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </div>
  );
}

export default LogoutBtn;
