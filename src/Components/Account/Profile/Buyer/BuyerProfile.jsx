import './BuyerProfile.css'

import { Link } from 'react-router-dom'
import PageLayout from '../../PageLayout/PageLayout'

function BuyerProfile() {
    return (
        <PageLayout>
            <div className="row profile-details">
                <div className="col-md-8">
                    <h2>User Details</h2>
                    <p><strong>Full Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Mobile Number:</strong> 1234567890</p>
                </div>
                <div className="col-md-4 text-end">
                    <p><strong>GST Number:</strong> GST123456789</p>
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