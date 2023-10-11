import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (loginData.email === '' || loginData.password === '') {
            console.log('Please fill in both email and password fields');
            return;
        }

        navigate('/home');
    };

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <div className="login-container">
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    value={loginData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                />

                <label htmlFor="password">Password:</label>
                <input
                    value={loginData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                />

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
