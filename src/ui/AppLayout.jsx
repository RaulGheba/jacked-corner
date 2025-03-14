import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function AppLayout(props) {
    return (
        <div>
        <Header/>
            <Sidebar/>
        <Outlet/>
        </div>
    );
}

export default AppLayout;