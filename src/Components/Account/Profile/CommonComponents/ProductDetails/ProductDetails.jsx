import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillImageFill } from "react-icons/bs";
import PageLayout from "../../../PageLayout/PageLayout";
import { GetProduct } from "../../../../ApiCallModules/Apis";
import { URL } from "../../../../Auth/Auth";
import "./ProductDetails.css";

function ProductDetails() {
  const id = useParams();

  const [product, setProduct] = useState({});
  const [prices, setPrices] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(product);
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetProduct(id.productId);
        setProduct(data);
        setPrices(data.prices);
        setSpecs(data.specs);
        setImages(data.images);
      } catch (error) {
        console.error(
          "Error occurred while fetching user data:",
          error
        );
      }
    };
    fetchProduct();
  }, []);


  const cardStyle = {
    border: "1px solid #e0e0e0", // Light border color
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Subtle box shadow
    borderRadius: "8px", // Rounded corners
    padding: "20px", // Adjust padding as needed
    marginBottom: "20px", // Adjust margin as needed
  };

  return (
    <PageLayout>
      <div className="product-details-card-container" style={cardStyle}>
        <div className="product-details-card">
          <div className="row">
            <div className="col-md-5">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
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

                <div className="carousel-inner carousel-inner-centr">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={URL + image}
                        className="carousel-image"
                        alt={`Product Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev carousel-btn bg-dark"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next carousel-btn bg-dark"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card d-flex prod-details-butadd">
              <div className="btn addcart-prodetail">Add to Cart</div>
              <div className="btn buy-prodetail">Buy Now</div>
              </div>
              
            </div>
            <div className="col-md-6">
              <h2 className="mt-2">
                <b>{product.product_name}</b>
              </h2>
                      <hr />
              <h5>Description</h5>
              <p className="lead">{product.description}</p>

              <h5>Pricings</h5>
<table className="table table-divider">
  <thead>
    <tr>
      <th>Quantity Range</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody >
    {prices.map((price, index) => (
      <tr key={index}>
        <td>
          {price.quantityRange.min} - {price.quantityRange.max}
        </td>
        <td>{price.price}</td>
      </tr>
    ))}
  </tbody>
</table>


              <h5>Specifications</h5>

              <ul className="list-group mb-3">
                {specs.map((spec, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      {spec.key} - {spec.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProductDetails;
