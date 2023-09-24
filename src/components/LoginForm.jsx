import React, { useState } from "react";
import userService from '../services/user.js'
import {getFromLocalStorage, setLocalStorage} from "../utils/methods.js";
import Notification from "./Notification.jsx";

function LoginForm({emitUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storeData = getFromLocalStorage('USER')
        if (storeData && storeData.hasOwnProperty('token') && storeData.token) {
            emitUser(storeData)
        } else {
            try {
                const user = await userService.login({username, password})
                if (user && user.hasOwnProperty('token') && user.token) {
                    setLocalStorage('USER', user)
                }
                emitUser(user)
            } catch (error) {
                showMessage(`${error.response.data.error}`, 'error' )
            }
        }
    };

    const showMessage = (str, style) => {
        setMessage({note: str, style: style})
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }

    return (
        <div>
            <h2>Login to application</h2>
            {message ? <Notification message={message.note} style={message.style}/> : <></>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
