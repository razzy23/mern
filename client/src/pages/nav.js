import { BrowserRouter, Link, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt from 'jwt-decode'
const liStyle = {
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
}

const navbutton ={
    textDecoration:'none', 
    backgroundColor:'#FAFAFA', 
    border:'1px solid black', 
    borderRadius:'12px', 
    padding:'10px 50px 10px 50px'
}

const liStyle2 = {
    backgroundColor:'white',
    borderRadius:'40px',
    boxShadow:'0px 10px 25px 0px rgba(0,0,0,0.3)',
    display: 'flex',
    width: '230px',
    padding: '15px',
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
            display: 'flex', justifyContent: 'space-around', alignContent: 'center', color: 'white !important', width: '99vw', borderRadius: '10px', margin: 'auto'
        }}>
            <ul style={{
                padding: 0,
                textAlign: 'center',
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',

            }}>
                {token1 &&<ul> 
                    <li style={liStyle}>
                        <a href="/bookView" style={navbutton}>Books View</a>
                    </li>
                    {token1.userType==='admin' &&
                    <li style={liStyle}>
                        <a href="/booksInsert" style={navbutton}>Insert</a>
                    </li>}
                </ul>}
            </ul>



            {token1 && <ul><li style={liStyle2}>
                <img src='images/user.png' style={{  width: '50px', height: '50px', borderRadius: '50%' }} />
                <a style={{textDecoration:'none', color:'#242424'}} href="/dash">Hey {token1.name}</a>
                <button style={{backgroundColor:'grey',color:'white',borderRadius:'30px', border:'0px', padding:'10px'}} onClick={Logout}>Logout</button> </li></ul>}


        </nav>
    )
}

export default Nav