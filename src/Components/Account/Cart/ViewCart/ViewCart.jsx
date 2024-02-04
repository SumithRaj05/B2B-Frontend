import './ViewCart.css';
import PageLayout from '../../PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DeleteCart, DeleteItem, GetItems, UpdateQuantity } from '../../../ApiCallModules/Apis';
import { URL } from '../../../Auth/Auth';
import Loader from '../../../Loader/Loader';

function ViewCart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState();

  const [isLoading, setIsLoading] = useState(false)

  const fetchCartItems = async () => {
    setIsLoading(true)
    await GetItems().then((cartData) => {
      setCartItems(cartData.cart_items.product_details);
      setTotalAmount(cartData.cart_items.total_amount);
      console.log(cartData.cart_items)
      setIsLoading(false)
    })
  };
  useEffect(() => {
    // Use the reduce function to sum up the quantities of all items
    const totalQuantity = cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  
    // Set the total quantity using the setQuantity function
    setQuantity(totalQuantity);
  }, [cartItems]);
  

  useEffect(() => {
    fetchCartItems();
  }, []);

  const QuantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const handleSaveClick = async (productId, quantity) => {
    await UpdateQuantity(productId, quantity).then((data) => {
      fetchCartItems();
      alert(data.content);
    })
  };

  const deleteItemHandler = async (productId) => {
    const data = await DeleteItem(productId);
    fetchCartItems();
    alert(data.content);
  };

  const deleteCartHandler = async () => {
    const data = await DeleteCart();
    fetchCartItems();
    alert(data.content);
  };

  return (
    <>
      <PageLayout />
      <div className="container mt-4 viewcart-main">
        <div className="row cart-item-mrg">
          <div className="col-12">
            <h2>Cart Items</h2>
          </div>
        </div>
        <div className="row cart-item-mrg">
          {
            isLoading ?
              <Loader />
              :
              <div className="col-md-8">
                {cartItems.length !== 0 ? (
                  <>
                    {cartItems.map((item, index) => (

                      <div className="row product-list border mb-1 cart-item-row" key={index}>
                        <div className="col-md-8 product-details">
                          <div className="d-flex align-items-center">

                            <img src={URL + item.product_image[0]} alt="" className="cart-img border shadow-lg" />


                            <div className="ml-3">
                              <div className="order-id">Product ID: {item.product_id}</div>
                              <h4>{item.product_name}</h4>
                              <p>Seller: {item.seller}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 action-buttons">
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control quantity-input"
                              defaultValue={item.quantity}
                              min="1"
                              onChange={QuantityChangeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-md-2 button-container">
                          <button
                            className="btn btn-success ml-md-2"
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
                    ))}
                  </>
                ) : (
                  <h2>Cart is empty :)</h2>
                )}
              </div>
          }
          <div className="col-md-4 ">
            <div className="total-amount-container p-3 total-amt-bor">
              <div className="total-amount text-md-right">
                <h4>Total Amount</h4>
                <h3>Total: <span className="total-amount-value">{totalAmount} rs</span></h3>
                <p>Total Items: {quantity}</p>
              </div>
              <div className="place-order-button mt-3 d-flex flex-row-reverse">
                <button
                  className="btn btn-lg btn-placeorder"
                  type="button"
                  onClick={() => navigate('/payment')}
                  style={{ backgroundColor: "#ffb12c", color: "white" }}
                >
                  Place Order
                </button>
                {/* <button
                  className="btn btn-outline-danger btn-lg"
                  type="button"
                  onClick={deleteCartHandler}
                >
                  Clear Cart
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCart;
