import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../action/userActions';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Register.css';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storeData = useSelector((state) => state.user);
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        mobileNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    useEffect(() => {
        console.log(storeData);
    }, [storeData]);

    const verifyEmail = (email) => {
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if (!String(email).match(regex)) {
            console.log('Invalid email');
            return false;
        }
        return true;
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        if (
            registerData.username === '' ||
            registerData.email === '' ||
            registerData.mobileNumber === '' ||
            registerData.password === ''
        ) {
            console.log('Fill out the form completely');
            return;
        }

        if (!verifyEmail(registerData.email)) {
            console.log('Check email format');
            return;
        }

        dispatch(registerUser(registerData));

        console.log('Registered user', registerData);
        console.log(storeData);

        navigate('/home');
    };

    return (
        <div>
            <form action="">
                <label htmlFor="username">UserName : </label>
                <input
                    value={registerData.username}
                    onChange={handleChange}
                    type="text"
                    name="username"
                />

                <label htmlFor="email">Email : </label>
                <input
                    value={registerData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                />

                <label htmlFor="password">Password : </label>
                <input
                    value={registerData.password}
                    onChange={handleChange}
                    type="text"
                    name="password"
                />

                <label htmlFor="mobileNumber">Mobile No. : </label>
                <input
                    value={registerData.mobileNumber}
                    onChange={handleChange}
                    type="number"
                    name="mobileNumber"
                    pattern="[0-9]{10}"
                />

                <button onClick={handleLogIn}>Submit</button>
            </form>
        </div>
    );
};

export default Register;
