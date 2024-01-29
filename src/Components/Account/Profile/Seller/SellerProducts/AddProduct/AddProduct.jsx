import './AddProduct.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PricesInput from './PricesInput/PricesInput';
import SpecsInput from './SpecsInput/SpecsInput';
import { URL } from '../../../../../Auth/Auth';

function AddProduct() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [productAbout, setProductAbout] = useState('');
    const [categoryType, setCategoryType] = useState('agri products & equipments');

    const [productImages, setProductImages] = useState([]);


    const [productDataList, setProductDataList] = useState([
        { price: '', quantityRange: { min: '', max: '' } },
    ]);
    const [specs, setSpecs] = useState([{ key: '', value: '' }]);


    const handlePricesChange = (priceData) => {
        setProductDataList(priceData)
    }
    const handleSpecsChange = (specsData) => {
        setSpecs(specsData)
    }

    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    }

    const productAboutChangeHandler = (event) => {
        setProductAbout(event.target.value);
    }

    const categoryTypeChangeHandler = (event) => {
        setCategoryType(event.target.value);
    }

    const productImagesChangeHandler = (event) => {
        const files = event.target.files;
        setProductImages(files);
    }


    const productSubmitHandler = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')

        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('description', productAbout);
        formData.append('prices', JSON.stringify(productDataList));
        formData.append('specs', JSON.stringify(specs));
        formData.append('category_type', categoryType);
        
        
        for (let i = 0; i < productImages.length; i++) {
            formData.append('product_image', productImages[i])
        }
        
        // Use the Fetch API to make a POST request
        fetch(URL + '/api/products/upload', {
            method: 'POST',
            headers: {
                'token': token,
            },
            body: formData,
        }).then(response => {

            response.json().then(data => {
                console.log(data)
            })
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error registering user:', error.message);
            return <p>error.message</p>
        });

    }

    return (
        <div className="container">
            <h2 className="mb-4">Upload  Product</h2>

            <form encType='multipart/form-data' onSubmit={productSubmitHandler}>
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
                    <label htmlFor="productAbout" className="form-label">Product Description</label>
                    <textarea
                        className="form-control"
                        id="productAbout"
                        rows="3"
                        placeholder="Enter description of the product"
                        value={productAbout}
                        onChange={productAboutChangeHandler}
                        required
                    ></textarea>
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
                        <option value="agri products & equipments">Agri Products & Equipments</option>
                        <option value="apparel & fashion">Apparel & Fashion</option>
                        <option value="architects & interior designing">Architects & Interior Designing</option>
                        <option value="automobile parts & spares">Automobile Parts & Spares</option>
                        <option value="chemicals dyes & solvents">Chemicals, Dyes & Solvents</option>
                        <option value="construction real & estate">Construction & Real Estate</option>
                        <option value="consumer electronics">Consumer Electronics</option>
                        <option value="electricals & electronics">Electricals & Electronics</option>
                        <option value="energy & power">Energy & Power</option>
                    </select>
                </div>

                <PricesInput priceData={handlePricesChange} />

                <SpecsInput specsData={handleSpecsChange} />

                <div className="mb-3">
                    <label htmlFor="productImages" className="form-label">Product Images</label>
                    <input
                        type="file"
                        name="image"
                        className="form-control"
                        id="productImages"
                        accept="image/*"
                        onChange={productImagesChangeHandler}
                        multiple
                    />
                </div>

                {/* <div className="mb-3">
                    <label htmlFor="productCatalogue" className="form-label">Product Catalogue (PDF)</label>
                    <input
                        type="file"
                        name='pdf'
                        className="form-control"
                        id="productCatalogue"
                        onChange={productCatalogueChangeHandler}
                        accept=".pdf"
                    />
                </div> */}

                <button type="submit" className="btn btn-primary">Upload Product</button>

            </form >
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>Cancel</button>
        </div >
    )
}

export default AddProduct