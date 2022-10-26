import { useState } from 'react'
import jwtDecode from 'jwt-decode'

function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json()
        if(data.user){
            localStorage.setItem('token', data.user)
            console.log(data)

            alert("Login Successful")
            window.location.href = "/bookview"
        }else{
            alert("Login Failed")
        }
    }

    return (
        <div style={{
             height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
          }}>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input style={{margin:'10px', padding:'10px', width:'20vw'}} value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Email" /><br />
                <input style={{margin:'10px', padding:'10px', width:'20vw'}} value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Password" />
                <br />
                <input style={{margin:'10px',padding:'10px'}} type="submit" value="Login" />
            </form>
        </div>
    );
}

export default App; 
