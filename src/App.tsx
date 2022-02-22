import React from 'react';
import './App.scss';
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReportsPage from "./pages/reports/ReportsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="sidebar-holder">
                <Sidebar/>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="reports" element={<ReportsPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
