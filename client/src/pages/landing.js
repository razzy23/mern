import { useState } from 'react'
import { Link } from 'react-router-dom'

const divstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white !important',
    width: '100%',
    borderRadius: '10px',
    margin: '0 auto 0 50px',
    padding: '30px',
    textDecoration: 'none',
    backgroundColor: '#abcdef',
    alignItems:'center'
}
 const div1 ={
    display: 'flex',
    alignContent: 'center',
    width: '60%',
    margin:'40px auto auto auto',
 }

function App() {
  

    return ( 
        <div style={{
             height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
          }}>
            <h2>Welcome to your local library</h2>
            <h3>Please Sign in to continue</h3>
            <div style={div1}>
                <a href = "/register" style={divstyle}>
                New User</a>
                <a href = "/login" style={divstyle}>
                Existing User</a>
                <a href = "/login" style={divstyle}>Admin</a>
            </div>
        </div>
    );
}

export default App;
