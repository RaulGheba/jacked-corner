import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function AppLayout(props) {
  return (
    <div className=" mt-0.5 mr-6 ml-6">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
