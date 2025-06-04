import React from 'react'
import { useState,  } from 'react'

export default function Login() {
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await fetch("https://www.google.com");
            const json = await res.json();
            setMessage("Welcome, bombs");
            console.log(json);
        } catch (error) {
            setMessage("Error: ", error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                aria-label="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button>LOG IN</button>
            {message && <div role="alert">{message}</div>}
        </form>
    );
}