import { BrowserRouter, Link, Routes } from 'react-router-dom'

const liStyle ={
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
}

function Nav() {
    return (
        <nav style={{
           color:'white !important', backgroundColor:"grey", width:'500px', borderRadius:'10px', margin:'auto'
        }}>
            <ul style={{
                padding:0,
                textAlign: 'center',
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-around',
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
                <li style={liStyle}>
                    <a href="/bookView">Books View</a>
                </li>
                <li style={liStyle}>
                    <a href="/booksInsert">Insert</a>
                </li>
            </ul>
        </nav>
    )
}


export default Nav