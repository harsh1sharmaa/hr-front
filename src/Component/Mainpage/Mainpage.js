import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import './mainpage.css';
import Dashboard from "./Pages/Dashboard";
import Info from "./Pages/Info";
import The from "./Pages/The";
import Two from "./Pages/Two";
import Sidebar from "./Sidebar/Sidebar";


const Mainpage = () => {
  return (
    <div>
      <div className="header"><Header/></div>
      <div className="nav-component">
        <div className="sidebar"><Sidebar/></div>
        <div className="pages">
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="dash" element={<Dashboard/>} />
                <Route path="info" element={<Info/>} />
                <Route path="the" element={<The/>} />
                <Route path="two" element={<Two/>} />
            </Routes>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
