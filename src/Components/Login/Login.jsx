import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

import { URL } from '../Auth/Auth';

import { useAuth } from "../Auth/AuthContext";


function Login() {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    // user input states 
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // user input handlers 
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // form submission handler function 
    const loginSubmitHandler = async (event) => {

        event.preventDefault();
        const userData = {
            phone_number: phoneNumber,
            password: password
        }

        // Use the Fetch API to make a POST request
        await fetch(URL + '/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),

        }).then(response => {

            response.json().then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    setToken(localStorage.getItem("token"))
                }
                navigate('/dashboard');
            })
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error registering user:', error.message);
            return <p>error.message</p>
        });
    }

    return (
        <div className="login-form">
            <form className="form-container" onSubmit={loginSubmitHandler}>
                <h1>Login</h1>

                {/* phone number input  */}
                <div className="form-group row">
                    <label htmlFor="phone_number" className="col-form-label">phone Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control login-input"
                            id="inputEmail3"
                            placeholder="Enter your phone Number"
                            onChange={handlePhoneNumberChange}
                            value={phoneNumber}
                        />
                    </div>
                </div>

                {/* password input  */}
                <div className="form-group row">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control login-input"
                            id="inputPassword3"
                            placeholder="Enter your Password"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </div>
                </div>

                {/* submit button  */}
                <div className="form-group row">
                    <div className="col-lg-10">
                        <button type="submit" className="btn btn-primary signup-btn">LogIn</button>
                        <Link to="/signup">don't have account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login