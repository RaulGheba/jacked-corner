import React, { useContext, useState } from "react";
import AppLayout from "../ui/AppLayout.jsx";
import { Form } from "react-router-dom";
import { AuthContext } from "../auth/authContext.jsx";
import supabase from "../services/supabase.js";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log({ data, error }); // ← see the full error object
    if (error) throw error; // so you know exactly why it failed
    setUser(data.user || null);
    return data;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      console.log("✅ Signed up successfully!");
    } catch (err) {
      console.error("Signup failed:", err.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-32 text-2xl">
      <h2 className="text-2xl font-[poppins] mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
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
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
