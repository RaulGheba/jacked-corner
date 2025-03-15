import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="flex justify-between px-12 font-[poppins] bg-gray-500 text-white py-2">
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="add-workout"
      >
        Workouts
      </NavLink>
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="account"
      >
        Account
      </NavLink>
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="library"
      >
        Library
      </NavLink>
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="store"
      >
        Store
      </NavLink>
      <NavLink
        className="hover:text-red-400 transition-colors duration-300"
        to="support"
      >
        Support
      </NavLink>
    </div>
  );
}

export default Header;
