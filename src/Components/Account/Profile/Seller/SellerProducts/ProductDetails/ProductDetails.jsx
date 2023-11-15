import "./ProductDetails.css"

import { BsFillImageFill } from 'react-icons/bs'
import PageLayout from '../../../../PageLayout/PageLayout'
import { Link } from "react-router-dom"

function ProductDetails() {
    return (
        <PageLayout>
            <div className="row">
                <div className="col-md-6">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <BsFillImageFill size={200} className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <BsFillImageFill size={200} className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <BsFillImageFill size={200} className="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">(Product Name)</h2>
                    <p className="lead">(About: Information about the product goes here.)</p>
                    <ul className="list-group mb-3">
                        <li className="list-group-item">(Quantity:)</li>
                        <li className="list-group-item">(Price:)</li>
                    </ul>
                    <Link to="https://www.africau.edu/images/default/sample.pdf" className="btn btn-primary" target="blank">View Product Catalogue</Link>
                </div>
            </div>
        </PageLayout>
    )
}

export default ProductDetails