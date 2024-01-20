import './ViewCart.css'

import PageLayout from "../../PageLayout/PageLayout"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DeleteCart, DeleteItem, GetItems, UpdateQuantity } from '../../../ApiCallModules/Apis';

function ViewCart() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState();

    const fetchCartItems = async () => {
        const cartData = await GetItems();
        setCartItems(cartData.cart_items.product_details);
        setTotalAmount(cartData.cart_items.total_amount);
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

    const QuantityChangeHandler = (e) => {
        setQuantity(e.target.value)
    }

    const handleSaveClick = async (productId, quantity) => {
        const data = await UpdateQuantity(productId, quantity)
        fetchCartItems()
        alert(data.content)
    }

    const deleteItemHandler = async (productId) => {
        const data = await DeleteItem(productId);
        fetchCartItems()
        alert(data.content)
    }

    const deleteCartHandler = async () => {
        const data = await DeleteCart();
        fetchCartItems()
        alert(data.content)
    }

    const TotalAmountHandler = () => {

    }

    return (
        <PageLayout>
            <div className="row">
                <div className="col-12">
                    <h2>Cart Items</h2>
                </div>
            </div>


            {
                (cartItems.length) !== 0 ?

                    <>
                        <div className="row">
                            <div className="col-12">
                                {
                                    cartItems.map((item, index) => {
                                        return <div className="product-list" key={index}>
                                            <div className="product-details">
                                                <div className="order-id float-right">Product ID: {item.product_id}</div>
                                                <h4>{item.product_name}</h4>
                                                <p>Seller: {item.seller}</p>
                                            </div>
                                            <div className="action-buttons float-right">
                                                <div className="input-group">
                                                    <input
                                                        type="number"
                                                        className="quantity-input"
                                                        defaultValue={item.quantity}
                                                        min="1"
                                                        onChange={QuantityChangeHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className="button-container">
                                                <button
                                                    className="btn btn-success ml-2"
                                                    onClick={() => handleSaveClick(item.product_id, quantity)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() => deleteItemHandler(item.product_id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                    })
                                }
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 total-amount">
                                <h4>Total Amount</h4>
                                <h3>Total: {totalAmount} rs</h3>

                                <button
                                    className="btn btn-primary btn-lg"
                                    type="button"
                                    onClick={() => navigate('/payment')}
                                >Place Order</button>
                                <button
                                    className="btn btn-outline-danger btn-lg"
                                    type="button"
                                    onClick={deleteCartHandler}
                                >Clear Cart</button>
                            </div>
                        </div>
                    </>
                    :
                    <h2>Cart is empty :)</h2>
            }



        </PageLayout>
    )
}

export default ViewCart