import React from 'react'
import "./Login.css";

function Login() {
    
    const register = () => {};
    const loginToApp = () => {};
    return (
        <div className="login">
            <img
                src="data:image/png;base64,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"
                alt="icon"
            />

            <form>
                <input
                    placeholder="Full name (required if registering)"
                    type="text"
                />
                <input
                    placeholder="Profile pic URL (optional)"
                    type="text"
                />
                <input
                    placeholder="Email"
                    type="email"
                />
                <input
                    placeholder="Password"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p> Not a member?
               <span className="login__register" onClick={register}>Register Now</span>
            </p>
           
        </div>
    )
}

export default Login
