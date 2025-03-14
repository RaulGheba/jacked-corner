import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import React from 'react';
import Dashboard from "./pages/Dashboard.jsx";
import AddWorkout from "./pages/AddWorkout.jsx";
import Account from "./pages/Account.jsx";
import Library from "./pages/Library.jsx";
import Store from "./pages/Store.jsx";
import Support from "./pages/Support.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate replace to="dashboard"/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-workout" element={<AddWorkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/library" element={<Library />} />
                <Route path="/store" element={<Store />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<PageNotFound/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;


