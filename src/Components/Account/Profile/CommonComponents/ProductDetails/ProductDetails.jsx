import "./ProductDetails.css"

import { BsFillImageFill } from 'react-icons/bs'
import PageLayout from '../../../PageLayout/PageLayout'
import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { GetProduct } from "../../../../ApiCallModules/Apis"
import { URL } from "../../../../Auth/Auth"

function ProductDetails() {
    const id = useParams()

    const [product, setProduct] = useState({})
    const [prices, setPrices] = useState([])
    const [specs, setSpecs] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        console.log(product);
    }, [product])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await GetProduct(id.productId);
                setProduct(data);
                setPrices(data.prices)
                setSpecs(data.specs)
                setImages(data.images)
            } catch (error) {
                console.error("Error occurred while fetching user data:", error);
            }
        };
        fetchProduct();
    }, [])

    return (
        <PageLayout>
            <div className="row">
                <div className="col-md-6" >
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner">
                            {images.map((image, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={URL + image} className="carousel-image" alt={`Product Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        <button className="carousel-control-prev carousel-btn bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carousel-btn bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-md-6">
                    <h2 className="mb-4"><b>{product.product_name}</b></h2>

                    <h5>Description</h5>
                    <p className="lead">{product.description}</p>

                    <h5>Pricings</h5>
                    {
                        prices.map((price, index) => {
                            return <ul className="list-group mb-3" key={index}>
                                <li className="list-group-item">Price: {price.price}</li>
                                <li className="list-group-item">Quantity Range: {price.quantityRange.min} - {price.quantityRange.max}</li>
                            </ul>
                        })
                    }

                    <h5>Specifications</h5>

                    <ul className="list-group mb-3">
                        {
                            specs.map((spec, index) => {
                                return <li key={index} className="list-group-item">{spec.key} - {spec.value}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        </PageLayout>
    )
}

export default ProductDetails