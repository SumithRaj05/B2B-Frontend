import React, { useState } from 'react';
import PageLayout from '../../../../PageLayout/PageLayout';
import { useParams } from 'react-router-dom';

const NotificationDetails = () => {
  const { id } = useParams();

  
  const detailedNotification = {
    _id: id,
    orderId: '123abc',
    buyerName: 'Amrit',
    message: 'Your order has been shipped!',
    time: "time",
    orderedItems: [
      {
        productName: 'Dummy Product 1',
        productId: 'p1',
        productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TpqS1oxpSXbmDdVpmgEYls6oEQ63SI681S74h81YIg&s',
        quantity: 2,
        // Add more details as needed
      },
      {
        productName: 'Dummy Product 2',
        productId: 'p2',
        productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TpqS1oxpSXbmDdVpmgEYls6oEQ63SI681S74h81YIg&s',
        quantity: 1,
        // Add more details as needed
      },
      // Add more ordered items as needed
    ],
    totalCost: 150,
    state: 'Bihar',
    city: 'Siwan',
    postalcode: "841239",
    shipAddress: 'Mairwa, Siwan, Bihar',
    // Add more details as needed
  };


   const [rejectionReason, setRejectionReason] = useState('');
   const [showRejectionForm, setShowRejectionForm] = useState(false);
 
   const handleRejectOrder = () => {
     // Show the rejection input and submit button
     setShowRejectionForm(true);
   };
 
   const handleSubmitRejection = () => {
     // Handle the submission of rejection reason here
     console.log("Rejection Reason:", rejectionReason);
     setRejectionReason('');
     setShowRejectionForm(false);
   };


  return (
    <>
      <PageLayout />
      <div className="container mt-4">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Notification Details</h2>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <p className="mb-1">
                <strong>Order ID:</strong> {detailedNotification.orderId} | 
                <strong>Buyer:</strong> {detailedNotification.buyerName} | 
                <strong>Time:</strong> <span className="">{detailedNotification.time}</span>
              </p>
            </div>
            <div className="alert alert-info border" role="alert">
              <strong>Message:</strong> {detailedNotification.message}
            </div>
            <div className="mb-4">
              <strong>Ordered Items:</strong>
              <div className="row">
                {detailedNotification.orderedItems.map((item, index) => (
                  <div className="col-md-8 product-details border mb-1 cart-item-row" key={index}>
                    <div className="d-flex align-items-center">
                      <img src={item.productImage} alt="" className="cart-img border shadow-lg" />
                      <div className="ml-3">
                        <div className="order-id">Product ID: {item.productId}</div>
                        <h4>{item.productName}</h4>
                        <p>Quantity: {item.quantity}</p>
                        {/* Add more details as needed */}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-8">
                  <strong>Total Cost:</strong> {detailedNotification.totalCost}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-1">
                <strong>State:</strong> {detailedNotification.state} | 
                <strong>City:</strong> {detailedNotification.city} | 
                <strong>Postal Code:</strong> {detailedNotification.postalcode} 
              </p>
              <p className="mb-1">
                <strong>Ship Address:</strong> {detailedNotification.shipAddress}
              </p>
            </div>
            {/* Add more detailed information here */}
          </div>
          <div className="card-footer">
            <button className="btn btn-success mr-2">Accept Order</button>
            <button className="btn btn-danger" onClick={handleRejectOrder}>Reject Order</button>

            {showRejectionForm && (
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter reason for rejection"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleSubmitRejection}>Submit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationDetails;
