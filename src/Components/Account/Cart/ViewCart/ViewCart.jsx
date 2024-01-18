import './ViewCart.css'

import PageLayout from "../../PageLayout/PageLayout"
import { useNavigate } from 'react-router-dom';

function ViewCart() {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <div className="row">
                <div className="col-12">
                    <h2>Cart Items</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="product-list">
                        <div className="product-details">
                            <div className="order-id float-right">Product ID: 12345</div>
                            <h4>Product Name 1</h4>
                            <p>Price: 50 rs</p>
                        </div>
                        <div className="action-buttons float-right">
                            <div className="input-group">
                                <input type="number" className="quantity-input" defaultValue="1" min="1" />
                            </div>
                        </div>
                    </div>

                    <div className="product-list">
                        <div className="product-details">
                            <div className="order-id float-right">Product ID: 12345</div>
                            <h4>Product Name 2</h4>
                            <p>Price: 30 rs</p>
                        </div>
                        <div className="action-buttons float-right">
                            <div className="input-group">
                                <input type="number" className="quantity-input" defaultValue="1" min="1" />
                            </div>
                        </div>
                    </div>

                    <div className="product-list">
                        <div className="product-details">
                            <div className="order-id float-right">Product ID: 12345</div>
                            <h4>Product Name 3</h4>
                            <p>Price: 10 rs</p>
                        </div>
                        <div className="action-buttons float-right">
                            <div className="input-group">
                                <input type="number" className="quantity-input" defaultValue="1" min="1" />
                            </div>
                        </div>
                    </div>

                    <div className="product-list">
                        <div className="product-details">
                            <div className="order-id float-right">Product ID: 12345</div>
                            <h4>Product Name 4</h4>
                            <p>Price: 10 rs</p>
                        </div>
                        <div className="action-buttons float-right">
                            <div className="input-group">
                                <input type="number" className="quantity-input" defaultValue="1" min="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 total-amount">
                    <h4>Total Amount</h4>
                    <p>Subtotal: 100 rs</p>
                    <p>GST: 1 rs</p>
                    <h3>Total: 101 rs</h3>
                    <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={() => navigate('/payment')}
                    >Place Order</button>
                    <button className="btn btn-outline-danger btn-lg" type="button">Delete Cart</button>
                </div>
            </div>
        </PageLayout>
    )
}

export default ViewCart