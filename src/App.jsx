import { useContext, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import AddWorkout from "./pages/AddWorkout.jsx";
import Account from "./pages/Account.jsx";
import Library from "./pages/Library.jsx";
import Store from "./pages/Store.jsx";
import Support from "./pages/Support.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SignUp from "./pages/SignUp.jsx";
import { AuthProvider } from "./auth/authContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // time data in cache stays
    },
  },
});

function App(props) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-workout" element={<AddWorkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/library" element={<Library />} />
              <Route path="/store" element={<Store />} />
              <Route path="/support" element={<Support />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
