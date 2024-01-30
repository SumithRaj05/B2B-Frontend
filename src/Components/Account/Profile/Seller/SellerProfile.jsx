import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; // Import the Edit icon
import { CgProfile } from "react-icons/cg";
import { TbMoodEmpty } from 'react-icons/tb';
import PageLayout from '../../PageLayout/PageLayout';
import { GetUser } from '../../../ApiCallModules/Apis';

import './SellerProfile.css';
import Loader from '../../../Loader/Loader';

function Profile() {
    const [userData, setUserData] = useState({});

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                await GetUser().then((data) => {
                    setUserData(data);
                    setIsLoading(false)
                })
            } catch (error) {
                alert('Error occurred while fetching user data:', error);
                console.error('Error occurred while fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const UploadImageHandler = () => {
        console.log("uploaded");
    }

    // const handleFileChange = (e) => {
    // const file = e.target.files[0];
    // setSelectedFile(file);
    // You can also add logic to preview the selected image if needed
    // };

    // Default profile picture URL or use userData.profile_picture if available
    const defaultProfilePicture = 'home/home-img1.png';

    return (
        <>
            <PageLayout />

            {
                isLoading ?
                    <Loader />
                    :
                    <>
                        <div className="row profile-details" style={{ border: '3px dashed #ffb12c' }}>
                            <div className="col-md-4 text-center">
                                <h2>Welcome {userData.full_name}!</h2>
                                {/* Display profile picture */}
                                <div className="profile-picture-container">
                                    {/* <img
                            src={userData.profile_picture || defaultProfilePicture}
                            alt="Profile"
                            className="seller-profile-picture mt-1"
                        /> */}
                                    <CgProfile size={102} />

                                    <div onClick={UploadImageHandler} className="edit-profile-icon">
                                        <FaEdit />
                                        <span>Edit</span>
                                    </div>
                                </div>
                                {/* Add change profile picture option */}
                                <div>
                                    {/* <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="profilePictureInput"
                        /> */}
                                    {/* <label htmlFor="profilePictureInput" className="btn btn-primary mt-2">
                            Add Profile Picture
                        </label> */}
                                </div>
                            </div>
                            <div className="col-md-8">
                                <p>
                                    <strong>Email:</strong> {userData.email}
                                </p>
                                <p>
                                    <strong>Phone Number:</strong> {userData.phone_number}
                                </p>
                                <p>
                                    <strong>Company Name:</strong> {userData.company_name}
                                </p>
                                <p>
                                    <strong>Bussiness Category:</strong> {userData.bussiness_type}
                                </p>
                                <div className="col-md-4 text-end">
                                    <p>
                                        <strong>GST Number:</strong> {userData.gst_number}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Manage your products here:</h2>
                        <div className="col-md-12 mt-3 text-center">
                            <Link to="/products" className="btn btn-outline-primary">
                                Manage Products
                            </Link>
                        </div>

                        <h1 className="mb-4">Your Orders</h1>

                        <h3>
                            <TbMoodEmpty size={50} /> No Orders placed yet...{' '}
                            <Link to="/dashboard">Start shopping now :)</Link>
                        </h3>
                    </>
            }
        </>
    );
}

export default Profile;
