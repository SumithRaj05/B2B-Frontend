import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'    

function Login() {
    const navigate = useNavigate();

    // user input states 

    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    // user input handlers 

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // form submission handler function 

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        const userData = {
            mobile_number: mobileNumber,
            password: password
        }
        console.log(userData);
        navigate('/dashboard')
    }

    return (
        <div className="login-form">
            <form className="form-container" onSubmit={loginSubmitHandler}>
                <h1>Login</h1>

                {/* mobile number input  */}
                <div className="form-group row">
                    <label htmlFor="mobile_number" className="col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control login-input"
                            id="inputEmail3"
                            placeholder="Enter your Mobile Number"
                            onChange={handleMobileNumberChange}
                            value={mobileNumber}
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
                        <button type="submit" className="btn btn-primary signup-btn">Register</button>
                        <Link to="/signup">don't have account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login