// Notification.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '../../../PageLayout/PageLayout';
import NotificationDetails from './NotificationDetails/NotificationDetails';

const Notification = () => {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState([]);

  // Dummy data for notifications
  const dummyData = [
    {
      _id: '1',
      orderId: '123abc',
      buyerName: 'John Doe',
      message: 'Your order has been shipped!',
      timestamp: new Date(),
    },
    {
      _id: '2',
      orderId: '456def',
      buyerName: 'Jane Doe',
      message: 'Payment received for your order.',
      timestamp: new Date(),
    },
    // Add more dummy data as needed
  ];

  useEffect(() => {
    // Fetch notifications from the backend (dummy data for now)
    setNotifications(dummyData);
  }, []);

  return (
    <PageLayout>
      <h2 className="mt-3">Notification Page</h2>
      {notifications.map((notification) => (
        <div key={notification._id} className="card mb-3">
        <h5 className="card-header bg-info text-white">Order ID: {notification.orderId}</h5>
          <div className="card-body">
            <p className="card-text">
              <strong>Buyer:</strong> {notification.buyerName} <br />
              <strong>Message:</strong> {notification.message} <br />
              <strong>Time:</strong> {notification.timestamp.toLocaleString()}
            </p>
            <div onClick={() => navigate("/notificationdetails/" + notification._id)} style={{ cursor: "pointer" }} className="btn btn-primary">View Detail</div>
          </div>
        </div>
      ))}
    </PageLayout>
  );
};

export default Notification;
