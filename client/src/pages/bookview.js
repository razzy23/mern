import { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function App() {
    const [data, setData] = useState({ books: [] })

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:1337/books')
                .then((response) => {
                    setData(response.data);
                });
        }
        
        fetchData()
    }, []);

    function Delete(id) {
        const res = axios.delete('http://localhost:1337/books/'+id)
            .then((response) => {
                alert(response.data);

            });
            window.location.replace('/bookView');
        
    }
    console.log(data)

    // async function booksview(event) {
    //     event.preventDefault()
    //     const response = await fetch('http://localhost:1337/books/', {
    //         method: 'GET',

    //     })
    //     const data = await response.json()
    //     const books = data.books
    //     console.log(books)
    //     console.log("jello")
    //     if (data.user) {
    //         localStorage.setItem('token', data.user)
    //         alert("Login Successful")
    //     }

    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <table style={{width:'90%'}}>
                <tbody style={{border: '1px solid black' }}>
                    <tr style={{border:'0.5px solid black', textAlign:'left'}}>
                        <th style={{width:'25%'}}>ISBN</th>
                        <th style={{width:'25%'}}>Title</th>
                        <th style={{width:'25%'}}>Author</th>
                        <th style={{width:'15%'}}>Status</th>
                        <th style={{width:'10%', }}>Delete</th>
                    </tr>

                    {data.books.map((book, index) => (
                        <tr key={index}>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.status}</td>
                            <td><button onClick={()=>Delete(book._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}



export default App; 
