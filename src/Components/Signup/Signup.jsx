import './Signup.css'

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { URL } from '../Auth/Auth';

function Signup() {
    const navigate = useNavigate();

    // user input states 

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [accountType, setAccountType] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bussinessType, setBussinessType] = useState('');
    const [gstNumber, setGstNumber] = useState('');

    // user input handlers 

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlephoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    const handleBussinessTypeChange = (event) => {
        setBussinessType(event.target.value);
    };

    const handleGstNumberChange = (event) => {
        setGstNumber(event.target.value);
    };

    // form submission handler function 

    const signupSubmitHandler = async (event) => {
        event.preventDefault();
        const userData = {
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            password: password,
            account_type: accountType,
            address: address
        }

        if (accountType === "seller") {
            userData.company_name = companyName;
            userData.bussiness_type = bussinessType;
            userData.gst_number = gstNumber;
        }

        // Use the Fetch API to make a POST request
        await fetch(URL + '/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        
        }).then(response => {

            response.json().then(data => {
                if(data.token){
                    localStorage.setItem("token", data.token);
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
        <div className="signup-form">
            <form className="form-container" onSubmit={signupSubmitHandler}>
                <h1>Signup</h1>

                {/* full name input */}
                <div className="form-group row">
                    <label htmlFor="fullname" className="col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control signup-input"
                            id="fullName"
                            placeholder="Full Name"
                            onChange={handleFullNameChange}
                            value={fullName}
                        />
                    </div>
                </div>

                {/* email input  */}
                <div className="form-group row">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control signup-input"
                            id="inputEmail3"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>
                </div>

                {/* phone number input  */}
                <div className="form-group row">
                    <label htmlFor="phone_number" className="col-form-label">phone Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control signup-input"
                            id="inputEmail3"
                            placeholder="phone Number"
                            onChange={handlephoneNumberChange}
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
                            className="form-control signup-input"
                            id="inputPassword3"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    </div>
                </div>

                {/* address input  */}
                <div className="form-group row">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control signup-input"
                            id="inputAddress3"
                            placeholder="Address"
                            onChange={handleAddressChange}
                            value={address}
                        />
                    </div>
                </div>

                {/* account type input  */}
                <fieldset className="form-group">
                    <label htmlFor="inputAccountType" className="col-form-label">Account type</label><br />
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="inlineRadio1"
                            value="buyer"
                            onChange={handleAccountTypeChange}
                        // defaultChecked={false}
                        />
                        <label className="form-check-label" htmlFor="buyer">Buyer</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radio"
                            id="inlineRadio2"
                            value="seller"
                            onChange={handleAccountTypeChange}
                        // defaultChecked={false}
                        />
                        <label className="form-check-label" htmlFor="seller">Seller</label>
                    </div>

                </fieldset>

                {
                    (accountType === "seller")
                    &&
                    <>

                        {/* company name input  */}
                        <div className="form-group row">
                            <label htmlFor="companyName" className="col-form-label">Company Name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control signup-input"
                                    id="companyName"
                                    placeholder="Company Name"
                                    onChange={handleCompanyNameChange}
                                    value={companyName}
                                />
                            </div>
                        </div>

                        {/* bussiness type input  */}
                        <div className="form-group row">
                            <label htmlFor="bussinessType" className="col-form-label">Busssiness Type</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control signup-input"
                                    id="bussinessType"
                                    placeholder="Bussiness Type"
                                    onChange={handleBussinessTypeChange}
                                    value={bussinessType}
                                />
                            </div>
                        </div>

                        {/* gst number input  */}
                        <div className="form-group row">
                            <label htmlFor="gstNumber" className="col-form-label">GST Number</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control signup-input"
                                    id="gstNumber"
                                    placeholder="GST Number"
                                    onChange={handleGstNumberChange}
                                    value={gstNumber}
                                />
                            </div>
                        </div>
                    </>
                }

                {/* submit button  */}
                <div className="form-group row">
                    <div className="col-lg-10">
                        <button type="submit" className="btn btn-primary signup-btn">Register</button>
                        <Link to="/login">have account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup