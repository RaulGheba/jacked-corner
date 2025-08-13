import React, { useContext } from "react";
import AppLayout from "../ui/AppLayout.jsx";
import { AuthContext } from "../auth/authContext.jsx";

export default function Welcome() {
  const { user } = useContext(AuthContext);
  console.log("Welcome user:", user.Email);
  return <div>WELCOME {user}</div>;
}
