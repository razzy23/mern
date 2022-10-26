import { useState } from 'react'
import { Link } from 'react-router-dom'

const divstyle = {
    boxShadow: '0px 10px 25px 0px rgba(0,0,0,0.1)', 
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white !important',
    width: '150px',
    borderRadius: '10px',
    margin: '40px 0 0 10px',
    padding: '30px',
    textDecoration: 'none',
    backgroundColor: '#abcdef',
    alignItems: 'center'
}
const div1 = {
    display: 'flex',
    alignContent: 'center',
    width: '60%',
    margin: '40px auto auto auto',
}

function App() {


    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <h2>Welcome to your local library</h2>
            <h3>Please Sign in to continue</h3>
            <div style={{display:'flex', width:'50vw'}}>
                <div style={divstyle}>
                    <a style={{fontWeight:'bold', fontSize:'20px',textDecoration:'none', color:'#ff4d00'}} href="/register" >
                        New User</a>

                </div>
                <div style={divstyle }>
                    <a style={{fontWeight:'bold', fontSize:'20px',textDecoration:'none', color:'#ff4d00'}} href="/login" >
                        Existing User</a>
                </div>
                <div style={divstyle}>
                    <a style={{fontWeight:'bold', fontSize:'20px',textDecoration:'none', color:'#ff4d00'}} href="/login" >Admin</a>
                </div>
            </div>
        </div>
    );
}

export default App;
