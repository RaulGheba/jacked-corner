import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function AppLayout(props) {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      <main className=" bg-yellow-400 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
