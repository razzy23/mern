import { BrowserRouter, Link, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt from 'jwt-decode'
const liStyle = {
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
}
function Logout() {
    alert("Logged out")
    localStorage.clear()
    window.location.href = '/'

}


function Nav() {
    const [token1, setToken1] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token)
            console.log(user)
            setToken1(user)
        }
    }, [])
    return (
        <nav style={{
            display: 'flex', justifyContent: 'space-around', alignContent: 'center', color: 'white !important', width: '100vw', borderRadius: '10px', margin: 'auto'
        }}>
            <ul style={{
                padding: 0,
                textAlign: 'center',
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',

            }}>
                {token1 && <ul>
                <li style={liStyle}>
                    <a href="/bookView">Books View</a>
                </li>
                <li style={liStyle}>
                    <a href="/booksInsert">Insert</a>
                </li></ul>}
            </ul>



            {token1 && <ul><li style={liStyle}>
                <img src='images/user.png' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <a href="/dash">Hey {token1.name}</a>
                <button onClick={Logout}>Logout</button> </li></ul>}


        </nav>
    )
}

export default Nav