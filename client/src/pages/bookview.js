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

    //     for(var i=0;i<books.length;i++){
    //         document.getElementById('r').innerHTML = "<td id='title'></td><td id='author'></td><td id='genre'></td><td id='status'></td>"
    //     }
    //     for (var i = 0; i < books.length; i++) {
    //         document.getElementById('title').innerHTML = books[i].title;
    //         document.getElementById('author').innerHTML = books[i].author;
    //         document.getElementById('genre').innerHTML = books[i].genre;
    //         document.getElementById('status').innerHTML = books[i].status;
    //     }

    // }

    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <table>
                <tbody style={{ display: 'block', border: '1px solid black' }}>
                    <tr style={{border:'1px solid black'}}>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                    </tr>

                    {data.books.map((book, index) => (
                        <tr key={index}>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td><button onClick={()=>Delete(book._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}



export default App; 
