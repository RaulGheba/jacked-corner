import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/authContext.jsx";
import supabase from "../services/supabase.js";

function Header(props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between px-12 font-[poppins] bg-black text-white py-4 ">
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
      {user && (
        <NavLink
          className="hover:text-white transition-colors duration-300 text-red-400"
          onClick={async (e) => {
            await supabase.auth.signOut();
            localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          Logout
        </NavLink>
      )}
    </div>
  );
}

export default Header;
