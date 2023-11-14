import './EditProduct.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EditProduct() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState('name');
    const [productAbout, setProductAbout] = useState('about');
    const [productQuantity, setProductQuantity] = useState(123);
    const [productPrice, setProductPrice] = useState(12);

    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    }

    const productAboutChangeHandler = (event) => {
        setProductAbout(event.target.value);
    }

    const productQuantityChangeHandler = (event) => {
        setProductQuantity(event.target.value);
    }

    const productPriceChangeHandler = (event) => {
        setProductPrice(event.target.value);
    }

    const productSubmitHandler = (event) => {
        event.preventDefault();
        const productDetails = {
            product_name: productName,
            about: productAbout,
            quantity: productQuantity,
            price: productPrice,
            category_type: categoryType
        }
        console.log(productDetails);
    }

    return (
        <div className="container">
            <h2 className="mb-4">Edit Product</h2>

            <form encType="multipart/form-data" onSubmit={productSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={productNameChangeHandler}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="productAbout" className="form-label">About Product</label>
                    <textarea
                        className="form-control"
                        id="productAbout"
                        rows="3"
                        placeholder="Enter information about product"
                        value={productAbout}
                        onChange={productAboutChangeHandler}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="productQuantity" className="form-label">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productQuantity"
                        placeholder="Enter quantity"
                        value={productQuantity}
                        onChange={productQuantityChangeHandler}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        placeholder="Enter price"
                        value={productPrice}
                        onChange={productPriceChangeHandler}
                        required
                        step="0.01"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>

            </form>
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
        </div>
    )
}

export default EditProduct