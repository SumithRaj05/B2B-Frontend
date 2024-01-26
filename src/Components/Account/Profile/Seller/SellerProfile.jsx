import './SellerProfile.css'

import { Link } from 'react-router-dom'
import { TbMoodEmpty } from "react-icons/tb";
import PageLayout from '../../PageLayout/PageLayout'
import { useEffect, useState } from 'react';
import { GetUser } from '../../../ApiCallModules/Apis';

function Profile() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetUser();
                setUserData(data);
            } catch (error) {
                console.error("Error occurred while fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <PageLayout />
            <div className="row profile-details" style={{border:'3px dashed #ffb12c'}}>
                <div className="col-md-8">
                    <h2>Welcome {userData.full_name}!</h2>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phone_number}</p>
                    <p><strong>Company Name:</strong> {userData.company_name}</p>
                    <p><strong>Bussiness Category:</strong> {userData.bussiness_type}</p>
                </div>
                <div className="col-md-4 text-end">
                    <p><strong>GST Number:</strong> {userData.gst_number}</p>
                </div>
            </div>

            <h2>Manage your products here:</h2>
            <div className="col-md-12 mt-3 text-center">
                <Link to="/products" className="btn btn-outline-primary">Manage Products</Link>
            </div>

            <h1 className="mb-4">Your Orders</h1>

            <h3><TbMoodEmpty size={50} />   No Orders placed yet...  <Link to="/dashboard">Start shopping now :)</Link></h3>

            </>
    )
}

export default Profile