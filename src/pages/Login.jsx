import React, { useContext, useState } from "react";
import supabase from "../services/supabase";
import { AuthContext } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, handleLogin, user } = useContext(AuthContext);
  console.log("User from Login:", user);

  const navigation = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-2xl">
      <h2 className="text-2xl font-[poppins] mb-4">
        Log in to access the app fully
      </h2>
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={async (e) => {
          await handleLogin(e, email, password);
          if (user) navigation("/");
        }}
      >
        <label className="flex flex-col">
          <span className="font-[poppins] mb-1">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="font-[poppins] mb-1">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer "
        >
          LOGIN
        </button>
      </form>
      <input />
    </div>
  );
}

export default Login;
