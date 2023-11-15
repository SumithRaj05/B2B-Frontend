import './Home.css'

import Navbar from "./Navbar/Navbar";
import { BsFillImageFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Home() {

    const [categoryTitle, setCategoryTitle] = useState('All');

    function highlightButton(btn) {
        setCategoryTitle(btn.textContent)

        document.querySelectorAll('.dashboard-buttons .btn').forEach(function (button) {
            button.classList.remove('active');
        });

        btn.classList.add('active');
    }

    return (
        <>
            <Navbar>
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
                    >Consumers Electronics</button>

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
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={80} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="#" className="btn btn-primary card-btn">Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Home