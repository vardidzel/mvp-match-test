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
        <>
            <Header/>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="reports" element={<ReportsPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </>
    );
}

export default App;
