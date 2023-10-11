import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './LoginAndRegister.css';

const LoginAndRegister = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div>

            {isLogin ? <h1>Register</h1> : <h1>Login</h1>}

            {isLogin ? <Register /> : <Login />}

            {!isLogin ? "Don't have an account?" : 'Already have an account?'}

            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Login' : 'Register'}</button>
           

        </div>
    )
}

export default LoginAndRegister