import React, { createContext, useState } from "react";
import supabase from "../services/supabase.js";

export const AuthContext = createContext({ user: null, setUser: () => {} });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
