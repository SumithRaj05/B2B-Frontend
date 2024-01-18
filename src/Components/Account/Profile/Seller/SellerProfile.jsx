import './SellerProfile.css'

import { Link } from 'react-router-dom'
import { BsFillImageFill } from 'react-icons/bs'
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
        <PageLayout>
            <div className="row profile-details">
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


            <h2>Top 5 Products</h2>
            <div className="row">
                <div className="card">
                    <BsFillImageFill size={150} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">(title)</h5>
                        <p className="card-text">(about)</p>
                        <p className="card-text">(price)</p>
                        <p className="card-text">(quantity)</p>
                        <Link to="#" className="btn btn-primary card-btn">View</Link>
                        <Link to="#" className="btn btn-secondary card-btn">Edit</Link>
                    </div>
                </div>
                <div className="card">
                    <BsFillImageFill size={150} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">(title)</h5>
                        <p className="card-text">(about)</p>
                        <p className="card-text">(price)</p>
                        <p className="card-text">(quantity)</p>
                        <Link to="#" className="btn btn-primary card-btn">View</Link>
                        <Link to="#" className="btn btn-secondary card-btn">Edit</Link>
                    </div>
                </div>
                <div className="card">
                    <BsFillImageFill size={150} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">(title)</h5>
                        <p className="card-text">(about)</p>
                        <p className="card-text">(price)</p>
                        <p className="card-text">(quantity)</p>
                        <Link to="#" className="btn btn-primary card-btn">View</Link>
                        <Link to="#" className="btn btn-secondary card-btn">Edit</Link>
                    </div>
                </div>
                <div className="card">
                    <BsFillImageFill size={150} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">(title)</h5>
                        <p className="card-text">(about)</p>
                        <p className="card-text">(price)</p>
                        <p className="card-text">(quantity)</p>
                        <Link to="#" className="btn btn-primary card-btn">View</Link>
                        <Link to="#" className="btn btn-secondary card-btn">Edit</Link>
                    </div>
                </div>
                <div className="card">
                    <BsFillImageFill size={150} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">(title)</h5>
                        <p className="card-text">(about)</p>
                        <p className="card-text">(price)</p>
                        <p className="card-text">(quantity)</p>
                        <Link to="#" className="btn btn-primary card-btn">View</Link>
                        <Link to="#" className="btn btn-secondary card-btn">Edit</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-12 mt-3 text-center">
                <Link to="/products" className="btn btn-outline-primary">View All Products</Link>
            </div>

            <h1 className="mb-4">Orders List</h1>

            <h3><TbMoodEmpty size={50} />   No Orders placed yet...  <Link to="/dashboard">Start shopping now :)</Link></h3>

        </PageLayout>
    )
}

export default Profile