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

        for(var i=0;i<books.length;i++){
            document.getElementById('r').innerHTML = "<td id='title'></td><td id='author'></td><td id='genre'></td><td id='status'></td>"
        }
        for (var i = 0; i < books.length; i++) {
            document.getElementById('title').innerHTML = books[i].title;
            document.getElementById('author').innerHTML = books[i].author;
            document.getElementById('genre').innerHTML = books[i].genre;
            document.getElementById('status').innerHTML = books[i].status;
        }

    }

    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <h1 onClick={booksview}>Books</h1><br/>
            <table id='xtable' style={{width:"800px",textAlign:'center'}} >
                <tr><th>Book title</th><th>Author</th><th>Genre</th><th>status</th></tr>
                <tr>
                    <td style={{textAlign:'left'}}>how to write commit messages</td>
                    <td>nisura</td>
                    <td >sci-fi</td>
                    <td>available</td>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}>how to eat water</td>
                    <td>ravindu</td>
                    <td >sci-fi</td>
                    <td>available</td>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}>how to row</td>
                    <td>sahan</td>
                    <td >fiction</td>
                    <td>available</td>
                </tr>
            </table>
            {
            
        }

        </div>
    );
}

export default App; 
