import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (data.status === 'ok') {
      alert("Registration Successful")
      history('/login')
    }
  }
  return (
    <div style={{
      height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    }}>
      <h1 style={{ fontFamily: "Arial" }}>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" placeholder="First Name" /><br />
        <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" placeholder="Email" /><br />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
