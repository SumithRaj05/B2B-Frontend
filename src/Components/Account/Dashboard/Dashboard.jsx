import './Dashboard.css'

import PageLayout from "../PageLayout/PageLayout";
import { useEffect, useState } from 'react';
import { AddItem, GetCategory } from '../../ApiCallModules/Apis';
import { URL } from '../../Auth/Auth';

function SellerDashboard() {

    const [categoryTitle, setCategoryTitle] = useState('All');
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await GetCategory(categoryTitle.toLowerCase());
                setProducts(data.products)
            } catch (error) {
                console.error("Error occurred while fetching user data:", error);
            }
        };
        fetchProduct();
    }, [categoryTitle])

    const addItemHandler = (productId) => {
        const addItem = async () => {
            try {
                await AddItem(productId).then(() => alert("added"))
            } catch (error) {
                console.error("Error occurred while fetching user data:", error);
            }
        };
        addItem();
    }

    const highlightButton = (btn) => {
        setCategoryTitle(btn.textContent)

        document.querySelectorAll('.dashboard-buttons .btn').forEach(function (button) {
            button.classList.remove('active');
        });

        btn.classList.add('active');
    }

    return (
        <>
            <PageLayout>
                <div className="dashboard-buttons">
                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info active"
                        onClick={(e) => highlightButton(e.target)}
                    >All</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Agri Products & Equipments</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Apparel & Fashion</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Consumer Electronics</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Electricals & Electronics</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Automobile Parts & Spares</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Architects & Interior Designing</button>

                </div>
                <div className="row cards-container">
                    <h3>{categoryTitle}</h3>
                    {
                        products.map((product, index) => (
                            <div className="card" key={index}>
                                <img className="card-img-top" height={100} width={100} src={URL + product.images[0]} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.product_name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.category_type}</p>
                                    <button onClick={() => addItemHandler(product.product_id)} className="btn btn-primary card-btn">Add to Cart</button>
                                </div>
                            </div>
                        ))

                    }

                </div>

            </PageLayout>
        </>
    )
}

export default SellerDashboard