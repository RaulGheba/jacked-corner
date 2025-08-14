import React, { createContext, useEffect, useState } from "react";
import supabase from "../services/supabase.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({ user: null, setUser: () => {} });
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function handleLogin(e, email, password) {
    e.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log("status:", data.status);
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
      return;
    }
    console.log(email, password);
    setUser(data.user || null);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log("Login successful:", data.user);
  }

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log("User from context (auth):", user);
    }
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
