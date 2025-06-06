import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-2xl">
      <h2 className="text-2xl font-[poppins] mb-4">
        Log in to access the app fully
      </h2>
      <form
        className="flex flex-col gap-4 w-80"
        onSubmit={() => console.log("logging in.")}
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
      </form>
      <input />
    </div>
  );
}

export default Login;
