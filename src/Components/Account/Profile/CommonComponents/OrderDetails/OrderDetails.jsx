import './OrderDetails.css'

import PageLayout from '../../../PageLayout/PageLayout'

function OrderDetails() {
    return (
        <PageLayout>
            <div className="row">
                <div className="col-12">
                    <h2>Order Details</h2>
                </div>
            </div>

            <div className="row">
                <div className="card">
                    <div className="card-header">Product ID: 12345</div>
                    <h5 className="card-title">Product Name 1</h5>
                    <p>Price: 50 rs</p>
                    <p>Quantity: 1</p>
                </div>
                <div className="card">
                    <div className="card-header">Product ID: 12345</div>
                    <h5 className="card-title">Product Name 1</h5>
                    <p>Price: 50 rs</p>
                    <p>Quantity: 1</p>
                </div>
                <div className="card">
                    <div className="card-header">Product ID: 12345</div>
                    <h5 className="card-title">Product Name 1</h5>
                    <p>Price: 50 rs</p>
                    <p>Quantity: 1</p>
                </div>
                <div className="card">
                    <div className="card-header">Product ID: 12345</div>
                    <h5 className="card-title">Product Name 1</h5>
                    <p>Price: 50 rs</p>
                    <p>Quantity: 1</p>
                </div>
                <div className="card">
                    <div className="card-header">Product ID: 12345</div>
                    <h5 className="card-title">Product Name 1</h5>
                    <p>Price: 50 rs</p>
                    <p>Quantity: 1</p>
                </div>
            </div>

            <button className="btn btn-success">Status: Ordered</button>
        
            <button className="btn btn-outline-danger remove-btn">Cancel Order</button>
        </PageLayout>
    )
}

export default OrderDetails