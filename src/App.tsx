import React from 'react';
import './App.scss';
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReportsPage from "./pages/reports/ReportsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="reports" element={<ReportsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
