import './Dashboard.css'

import PageLayout from "../PageLayout/PageLayout";
import { useEffect, useState } from 'react';
import { AddItem, GetCategory } from '../../ApiCallModules/Apis';
import { URL } from '../../Auth/Auth';
import CategoryBar from './components/CategoryBar';

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
            <div style={{ width: "100vw", background: "white", display: "flex", flexDirection: "row", alignItems: "center" }}>
    <div style={{ marginRight: "20px" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column" , alignItems:"center" }}>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" style={{ height: "auto", width: "80px" }} />
            <p>Agri Product & Equipments</p>
        </a>
    </div>
    <div style={{ marginRight: "20px" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column" , alignItems:"center" }}>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" style={{ height: "auto", width: "80px"}} />
            <p>Agri Product & Equipments</p>
        </a>
    </div>
</div>

                <CategoryBar highlightButton={highlightButton}/>
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