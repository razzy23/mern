import React from "react";
import { useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Landing from './pages/landing'
import Nav from './pages/nav'
import Dash from './pages/dash'
import BooksInsert from './pages/booksInsert'
import BooksView from './pages/bookview'

const App = () => {
    return <div>
        <h1 style={{paddingLeft:"40px"}}><a style={{textDecoration:'none', color:'black'}} href="/">Library Management</a></h1>
        <Nav/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element=<Landing /> /> 
                <Route path="/login" element=<Login /> />
                <Route path="/register" element=<Register /> />
                <Route path="/dash" element=<Dash /> />
                <Route path="/booksInsert" element=<BooksInsert /> />
                <Route path="/bookview" element=<BooksView /> />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App