import './BuyerProfile.css'

import { Link } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'
import React, { useEffect, useState } from 'react';
import { GetUser } from '../../../ApiCallModules/Apis';

function BuyerProfile() {

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

    const dummyOrders = [
        {
          id: 12345,
          products: [
            {
              name: "Product Name 1",
              price: 19.99,
              seller: "Seller 1",
              quantity: 2,
              image: "url_to_image1.jpg",
            },
            {
              name: "Product Name 2",
              price: 29.99,
              seller: "Seller 2",
              quantity: 1,
              image: "url_to_image2.jpg",
            },
            {
              name: "Product Name 3",
              price: 39.99,
              seller: "Seller 3",
              quantity: 3,
              image: "url_to_image3.jpg",
            },
          ],
        },
        {
          id: 67890,
          products: [
            {
              name: "Product Name 4",
              price: 49.99,
              seller: "Seller 4",
              quantity: 1,
              image: "url_to_image4.jpg",
            },
            {
              name: "Product Name 5",
              price: 59.99,
              seller: "Seller 5",
              quantity: 2,
              image: "url_to_image5.jpg",
            },
          ],
        },
        // ... more orders
      ];
      
    return (
        <PageLayout>
            <div className="row profile-details">
                <div className="col-md-8 buyer-profil">
                    <h2>Welcome <b>{userData.full_name}</b></h2>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phone_number}</p>
                    <p><strong>Address:</strong> {userData.address}</p>
                </div>
            </div>
            <h1 className="mb-4">Orders List</h1>

            <div className="order-container row">
    {dummyOrders.map((order) => (
        <div className="card cart-item-row" key={order.id}>
            <div className="card-header orderlist-head">
                Order #{order.id}
            </div>
            <div className="card-body order-card-body2">
                {order.products.map((product, index) => (
                    <React.Fragment key={index}>
                        <div className="row product-list border mb-1 cart-item-row">
                            <div className="col-md-8 product-details">
                                <div className="d-flex align-items-center">
                                    <img src={product.image} alt={product.name} className="cart-img border shadow-lg" />
                                    <div className="ml-3">
                                        <div className="order-id">Product ID: {product.id}</div>
                                        <h4>{product.name}</h4>
                                        <p>Seller: {product.seller}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index < order.products.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <Link to="/order_details" className="btn btn-primary">
                    Check Details
                </Link>
            </div>
        </div>
    ))}
</div>


</PageLayout>
);
}

export default BuyerProfile;