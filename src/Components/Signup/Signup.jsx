import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from '../Auth/Auth';
import "./Signup.css"
import Loader from '../Loader/Loader';

function Signup() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [accountType, setAccountType] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bussinessType, setBussinessType] = useState('');
    const [gstNumber, setGstNumber] = useState('');

    const [isLoading, setIsLoading] = useState(false);

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

    const signupSubmitHandler = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        const userData = {
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            password: password,
            account_type: accountType,
            address: address,
        };

        if (accountType === 'seller') {
            userData.company_name = companyName;
            userData.bussiness_type = bussinessType;
            userData.gst_number = gstNumber;
        }

        await fetch(URL + '/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                response.json().then((data) => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                    }
                    navigate('/dashboard');
                });
            })
            .catch((error) => {
                setIsLoading(false)
                alert('Error registering user:', error.message);
                return <p>{error.message}</p>;
            });
    };

    return (
        <div className="signup-body" style={{ marginTop: "-90px" }}>
            <div className="container signup-container">
                <img src="\src\assets\logo-bgremoved.png" alt="logo" style={{ width: "80px" }} />
                {
                    isLoading ?
                        <Loader />
                        :
                        <form className="form-container signup-form-container" onSubmit={signupSubmitHandler}>
                            <h1>Signup</h1>

                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control signup-form-control"
                                    id="fullName"
                                    placeholder="Full Name"
                                    onChange={handleFullNameChange}
                                    value={fullName}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputEmail3" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control signup-form-control"
                                    id="inputEmail3"
                                    placeholder="Email"
                                    onChange={handleEmailChange}
                                    value={email}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPhoneNumber" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control signup-form-control"
                                    id="inputPhoneNumber"
                                    placeholder="Phone Number"
                                    onChange={handlephoneNumberChange}
                                    value={phoneNumber}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPassword3" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control signup-form-control"
                                    id="inputPassword3"
                                    placeholder="Password"
                                    onChange={handlePasswordChange}
                                    value={password}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputAddress3" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control signup-form-control"
                                    id="inputAddress3"
                                    placeholder="Address"
                                    onChange={handleAddressChange}
                                    value={address}
                                />
                            </div>

                            <fieldset className="mb-3">
                                <legend className="form-label">Account type</legend>
                                <div className="form-check form-check-inline ">
                                    <input
                                        className="form-check-input signup-form-check-input"
                                        type="radio"
                                        name="radio"
                                        id="inlineRadio1"
                                        value="buyer"
                                        onChange={handleAccountTypeChange}
                                    />
                                    <label className="form-check-label" htmlFor="buyer">
                                        Buyer
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input signup-form-check-input"
                                        type="radio"
                                        name="radio"
                                        id="inlineRadio2"
                                        value="seller"
                                        onChange={handleAccountTypeChange}
                                    />
                                    <label className="form-check-label " htmlFor="seller">
                                        Seller
                                    </label>
                                </div>
                            </fieldset>

                            {accountType === 'seller' && (
                                <>
                                    <div className="mb-3">
                                        <label htmlFor="companyName" className="form-label">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control signup-form-control"
                                            id="companyName"
                                            placeholder="Company Name"
                                            onChange={handleCompanyNameChange}
                                            value={companyName}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="bussinessType" className="form-label">
                                            Business Type
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control signup-form-control"
                                            id="bussinessType"
                                            placeholder="Business Type"
                                            onChange={handleBussinessTypeChange}
                                            value={bussinessType}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="gstNumber" className="form-label">
                                            GST Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control signup-form-control"
                                            id="gstNumber"
                                            placeholder="GST Number"
                                            onChange={handleGstNumberChange}
                                            value={gstNumber}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="mb-3">
                                <button type="submit"
                                    className="btn btn-warning"
                                    style={{ width: '100%' }}>Register
                                </button>


                            </div>

                            <Link to="/login" className="ms-2">
                                Already have an account?
                            </Link>
                        </form>
                }
            </div>
        </div>
    );
}

export default Signup;
