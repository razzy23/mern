import { BrowserRouter, Link, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt from 'jwt-decode'
const liStyle = {
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
}
const liStyle2 = {
    backgroundColor:'white',
    borderRadius:'10px',
    boxShadow:'0px 10px 10px 0px rgba(0,0,0,0.75)',
    display: 'flex',
    width: '230px',
    padding: '10px',
    textDecoration: 'none',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
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
                <ul> {token1 &&
                    <li style={liStyle}>
                        <a href="/bookView">Books View</a>
                    </li>}
                    {token1.name=='admin' &&
                    <li style={liStyle}>
                        <a href="/booksInsert">Insert</a>
                    </li>}
                </ul>
            </ul>



            {token1 && <ul><li style={liStyle2}>
                <img src='images/user.png' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <a href="/dash">Hey {token1.name}</a>
                <button onClick={Logout}>Logout</button> </li></ul>}


        </nav>
    )
}

export default Nav