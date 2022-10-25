import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Landing from './pages/landing'
import Nav from './pages/nav'
import Dash from './pages/dash'


const App = () => {
    return <div>
        <h1 style={{paddingLeft:"40px"}}>Library Management Pro Max</h1>
        <Nav />
        <BrowserRouter>
            <Routes>
                <Route path="/" element=<Landing /> /> 
                <Route path="/login" element=<Login /> />
                <Route path="/register" element=<Register /> />
                <Route path="/dash" element=<Dash /> />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App