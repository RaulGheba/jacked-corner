import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function AppLayout(props) {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className=" bg-gray-300 overflow-x-hidden text-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
