import './BuyerProfile.css'

import { Link } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'
import { useEffect, useState } from 'react';
import { GetUser } from '../../../ApiCallModules/Apis';

function BuyerProfile() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetUser();
                setUserData(data);
                console.log(userData);
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
                    <h2>Welcome <b>{userData.full_name}</b></h2>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phone_number}</p>
                    <p><strong>Address:</strong> {userData.address}</p>
                </div>
            </div>
            <h1 className="mb-4">Orders List</h1>

            <div className="order-container row">

                <div className="card">
                    <div className="card-header">
                        Order #12345
                    </div>
                    <div className="card-body order-card-body">
                        <h5 className="card-title">Product Name 1</h5><hr />
                        <h5 className="card-title">Product Name 2</h5><hr />
                        <h5 className="card-title">Product Name 3</h5><hr />
                        <h5 className="card-title">Product Name 4</h5><hr />
                        <h5 className="card-title">Product Name 5</h5><hr />
                        <h5 className="card-title">Product Name 6</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <Link to="/order_details"   className="btn btn-primary">Check Details</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Order #12345
                    </div>
                    <div className="card-body order-card-body">
                        <h5 className="card-title">Product Name 1</h5><hr />
                        <h5 className="card-title">Product Name 2</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <Link to="/order_details"  className="btn btn-primary">Check Details</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Order #12345
                    </div>
                    <div className="card-body order-card-body">
                        <h5 className="card-title">Product Name 1</h5><hr />
                        <h5 className="card-title">Product Name 2</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <Link to="/order_details"  className="btn btn-primary">Check Details</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Order #12345
                    </div>
                    <div className="card-body order-card-body">
                        <h5 className="card-title">Product Name 1</h5><hr />
                        <h5 className="card-title">Product Name 2</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <Link to="/order_details"  className="btn btn-primary">Check Details</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Order #12345
                    </div>
                    <div className="card-body order-card-body">
                        <h5 className="card-title">Product Name 1</h5><hr />
                        <h5 className="card-title">Product Name 2</h5>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <Link to="/order_details"  className="btn btn-primary">Check Details</Link>
                    </div>
                </div>

            </div>
        </PageLayout >
    )
}

export default BuyerProfile