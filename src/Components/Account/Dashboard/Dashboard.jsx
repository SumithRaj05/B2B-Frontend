import './Dashboard.css';
import PageLayout from "../PageLayout/PageLayout";
import { useEffect, useState } from 'react';
import { GetCategory } from '../../ApiCallModules/Apis';
import { URL } from '../../Auth/Auth';
import DashCategory from './components/Dash_category';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

function SellerDashboard() {
  const navigate = useNavigate()
  const [categoryTitle, setCategoryTitle] = useState('All');
  const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(-1);

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        await GetCategory(categoryTitle.toLowerCase()).then((data) => {
          setProducts(data.products);
          setIsLoading(false);
        })

      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };
    fetchProduct();
  }, [categoryTitle]);

  // const addItemHandler = (productId) => {
  //   const addItem = async () => {
  //     try {
  //       await AddItem(productId).then(() => alert("added"));
  //     } catch (error) {
  //       console.error("Error occurred while fetching user data:", error);
  //     }
  //   };
  //   addItem();
  // };

  const highlightButton = (btn) => {
    setCategoryTitle(btn);

    // document.querySelectorAll('.dashboard-buttons .btn').forEach(function (button) {
    //   button.classList.remove('active');
    // });

    // btn.classList.add('active');
  };

  return (
    <>
      <PageLayout />
      <DashCategory highlightButton={highlightButton} />

      {isLoading ?
        <Loader />
        :
        <div className="row cards-container d-flex mt-5">
          {products.map((product, index) => (
            <div onClick={() => navigate("/product_details/" + product.product_id)} style={{ cursor: "pointer" }} className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 d-flex dash-prod-card" key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} flex-grow-1`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(-1)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className={`card-body d-flex flex-column`}>
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    {/* {product.prices[product.prices.length - 1].quantityRange.min} -
                  {product.prices[product.prices.length - 1].quantityRange.max ?
                    product.prices[product.prices.length - 1].quantityRange.max : "more"
                  }   */}
                    <b>{product.prices[product.prices.length - 1].price}rs</b></p>
                  {/* <div className="d-flex justify-content-between mt-auto">
                    <button
                      onClick={() => addItemHandler(product.product_id)}
                      className="btn btn-warning card-btn btn-icn-cent"
                    >
                      <span className="material-symbols-outlined" style={{ color: "white" }}>
                        add_shopping_cart
                      </span>
                    </button>
                    <button
                      // onClick={() => addItemHandler(product.product_id)}
                      className="btn btn-info card-btn btn-icn-cent"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/fmjvulyw.json"
                        trigger="loop"
                        delay="1500"
                        style={{ width: '25px', height: '25px' }}
                      >
                      </lord-icon>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
}

export default SellerDashboard;