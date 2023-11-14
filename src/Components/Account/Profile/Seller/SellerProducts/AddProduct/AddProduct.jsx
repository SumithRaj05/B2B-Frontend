import './AddProduct.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [productAbout, setProductAbout] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [productImages, setProductImages] = useState([]);
    const [productCatalogue, setProductCatalogue] = useState('');

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

    const categoryTypeChangeHandler = (event) => {
        setCategoryType(event.target.value);
    }

    const productImagesChangeHandler = (event) => {
        const files = event.target.files;
        setProductImages([...files]);
    }

    const productCatalogueChangeHandler = (event) => {
        const file = event.target.files[0];
        setProductCatalogue(file);
    }

    const resetForm = () => {
        setProductName('');
        setProductAbout('');
        setProductQuantity('');
        setProductPrice('');
        setCategoryType('');
        setProductImages([]);
        setProductCatalogue('');

    }

    const productSubmitHandler = (event) => {
        event.preventDefault();
        const productDetails = {
            product_name: productName,
            about: productAbout,
            quantity: productQuantity,
            price: productPrice,
            category_type: categoryType,
            product_image: productImages,
            product_catalogue: productCatalogue
        }
        resetForm();
        console.log(productDetails);
    }



    return (
        <div className="container">
            <h2 className="mb-4">Upload  Product</h2>

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

                <div className="mb-3">
                    <label htmlFor="categoryType" className="form-label">Category Type</label>
                    <select
                        className="form-select"
                        id="categoryType"
                        value={categoryType}
                        onChange={categoryTypeChangeHandler}
                        required
                    >
                        {/* <option disabled selected>Select category type</option> */}
                        <option value="agri-products">Agri Products & Equipments</option>
                        <option value="apparel-fashion">Apparel and Fashion</option>
                        <option value="architects-interior-designing">Architects & Interior Designing</option>
                        <option value="automobile-parts-spares">Automobile Parts & Spares</option>
                        <option value="chemicals-dyes-solvents">Chemicals, Dyes & Solvents</option>
                        <option value="construction-real-estate">Construction & Real Estate</option>
                        <option value="consumer-electronics">Consumer Electronics</option>
                        <option value="electricals-electronics">Electricals & Electronics</option>
                        <option value="energy-power">Energy and Power</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="productImages" className="form-label">Product Images (up to 5)</label>
                    <input
                        type="file"
                        className="form-control"
                        id="productImages"
                        accept="image/*"
                        value={productImages}
                        onChange={productImagesChangeHandler}
                        multiple
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="productCatalogue" className="form-label">Product Catalogue (PDF)</label>
                    <input
                        type="file"
                        className="form-control"
                        id="productCatalogue"
                        value={productCatalogue}
                        onChange={productCatalogueChangeHandler}
                        accept=".pdf"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Upload Product</button>

            </form>
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
        </div>
    )
}

export default AddProduct