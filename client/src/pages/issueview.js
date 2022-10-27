import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios';


function App() {
  const [token1, setToken1] = useState('')
  const [data, setData] = useState({ books: [] })
  const [name, setName] = useState('')
  const [select, setSelect] = useState('Select')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt(token)
      console.log(user)
      setToken1(user)
    }


  }, [])
  useEffect(() => {
    const r = axios.get('http://localhost:1337/books/')
      .then(response => setData(response.data));
  }, [])


  return (
    <div style={{
      height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    }}>
      <h1 style={{ fontFamily: "Arial" }}>Issue Books</h1>
      <form>
        <select style={{ borderRadius: '10px', border: '0.5px solid', margin: '10px', padding: '10px', width: '20vw' }} value="Hllo">
          <option value="grapefruit">User1</option>
          <option value="grapefruit">User2</option>
        </select>

        <br />
        <select style={{ borderRadius: '10px', border: '0.5px solid', margin: '10px', padding: '10px', width: '20vw' }} value="Hllo">
          <option value="grapefruit">Book 1</option>
          <option value="grapefruit">Book2</option>
        </select><br /> 
        <input style={{ margin: '10px', padding: '10px' }} type="submit" value="Issue" />
      </form>
    </div>
  );
}

export default App;
