import React from "react";
import jwt from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashbord = () => {
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')

    const history = useNavigate()
   
    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'Content-Type': 'application/json',

                'x-access-token': localStorage.getItem('token')
            }
        })
        const data = await req.json()
        console.log(data)
        if (data.status === 'ok') {
            setQuote(data.quote)
        } else {
            alert(data.error)
        }
    }


    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token)

        }
        else{
            alert("Please Login")
        }
        // if (token) {
        //     const user = jwt(token)
        //     console.log(user)
        //     if (!user) {
        //         localStorage.removeItem('token')
        //         history('/login')
        //         alert("Logged out")
        //     } else {
        //         populateQuote()
        //         alert("Logged in")
        //         history('/dash')
        //         document.getElementById('log').style.display = 'none'
        //         document.getElementById('reg').style.display = 'none'
        //         document.getElementById('home').innerHTML = 'Log out'
        //     }

        // }
    }, [])

    async function updateQuote(event) {
        event.preventDefault()
        const req = await fetch('http://localhost:1337/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                quote: tempQuote,
            })
        })
        const data =await req.json()
        if (data.status === 'ok') {
            setTempQuote('')
            setQuote(data.quote)
        } else {
            alert(data.error)
        }
    }

    return (
        <div>
            <h1> Your Quote: {quote || "No quote found"}</h1>
            <form onSubmit={updateQuote}>
                <input type="text" placeholder="Quote" value={tempQuote} onChange={(e) => setTempQuote(e.target.value)} />
                <input type="submit" value="Update Quote" />
            </form>
        </div>
    );
}

export default Dashbord;