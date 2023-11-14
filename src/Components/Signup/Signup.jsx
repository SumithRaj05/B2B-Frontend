import './Signup.css'

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    // user input states 
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
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

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
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

    // reset form after submission 

    const resetForm = () => {
        setFullName('');
        setEmail('');
        setMobileNumber('');
        setPassword('');
        setAccountType('');
        setCompanyName('');
        setBussinessType('');
        setGstNumber('');

    }

    // form submission handler function 

    const signupSubmitHandler = (event) => {
        event.preventDefault();
        const userData = {
            fullname: fullName,
            email: email,
            mobile_number: mobileNumber,
            password: password,
            account_type: accountType
        }
        if (accountType === "seller" || accountType === "both") {
            userData.company_name = companyName,
                userData.bussiness_type = bussinessType,
                userData.gst_number = gstNumber
        }
        resetForm();
        console.log(userData);
        navigate('/login')
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

                {/* mobile number input  */}
                <div className="form-group row">
                    <label htmlFor="mobile_number" className="col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control signup-input"
                            id="inputEmail3"
                            placeholder="Mobile Number"
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
                            className="form-control signup-input"
                            id="inputPassword3"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
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

                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="radio"
                            id="inlineRadio3"
                            value="both"
                            onChange={handleAccountTypeChange}
                            // defaultChecked={false}
                        />
                        <label className="form-check-label" htmlFor="both">Both</label>
                    </div>
                    
                </fieldset>

                {
                    (accountType === "seller" || accountType === "both")
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