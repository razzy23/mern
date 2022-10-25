import { BrowserRouter, Link, Routes } from 'react-router-dom'

const liStyle ={
    display: 'inline-block',
    padding: '10px',
}

function Nav() {
    return (
        <nav>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <li style={liStyle}>
                    <a href="/">Home</a>
                
                </li>
                <li style={liStyle}>
                    <a href="/login">Login</a>
                </li>
                <li style={liStyle}>
                    <a href="/register">Register</a>
                </li>
            </ul>
        </nav>
    )
}


export default Nav