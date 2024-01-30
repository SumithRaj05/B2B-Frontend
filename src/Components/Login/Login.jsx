import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { URL } from '../Auth/Auth';
import { useAuth } from "../Auth/AuthContext";
import Loader from "../Loader/Loader"

function Login() {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const loginSubmitHandler = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        const userData = {
            phone_number: phoneNumber,
            password: password
        };

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
            setIsLoading(false)
            alert('Error logging in user:', error.message);
            return <p>{error.message}</p>
        });
    }

    return (
        <div className="login-body" style={{marginTop:"-90px"}}>
        <div className="container login-container">
       <img src="/home/bejiness-logo.png" alt="logo" style={{width:"80px"}} />

            {
            isLoading?
            <Loader />
            :
            <form className="form-container mt-2 login-form-container" onSubmit={loginSubmitHandler}>
                <h1>Login</h1>

                <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control login-form-control"
                        id="inputEmail3"
                        placeholder="Enter your Phone Number"
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control login-form-control"
                        id="inputPassword3"
                        placeholder="Enter your Password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-warning" 
                style={{ width: '100%' }}>Log In</button>
                    <Link to="/signup" className="mt-2 d-block text-center">Don't have an account?</Link>
                </div>
            </form>
            }
        </div>
        </div>
    )
}

export default Login;
