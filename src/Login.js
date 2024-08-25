import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Login functionality not implemented.');
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google Logo"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email or phone"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
            <div className="options">
                <a href="#">Forgot email?</a>
                <a href="#">Create account</a>
            </div>
        </div>
    );
}

export default Login;
