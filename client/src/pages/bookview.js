import { useState } from 'react'


function App() {


    async function booksview(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/books/', {
            method: 'GET',

        })
        const data = await response.json()
        const books = data.books
        console.log(books)
        console.log("jello")
        if (data.user) {
            localStorage.setItem('token', data.user)
            alert("Login Successful")
        }
    }

    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <h1 onClick={booksview}>Books</h1>

            {
            
        }

        </div>
    );
}

export default App; 
