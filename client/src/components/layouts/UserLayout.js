//import Header from "../homepage/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context";

function UserLayout() {
  const { state } = useContext(Context);

  if (state.user._id) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}

export default UserLayout;
