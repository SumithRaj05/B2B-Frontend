import './SellerProducts.css';
import { Link } from 'react-router-dom';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import PageLayout from '../../../PageLayout/PageLayout';
import { useEffect, useState } from 'react';
import { URL } from '../../../../Auth/Auth';

function SellerProducts() {
    const [products, setProducts] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      await fetch(URL + '/api/products/seller', {
        method: 'GET',
        headers: {
          'token': localStorage.getItem('token')
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((err) => {
          console.log(err.message);
          return <p>{err.message}</p>;
        });
    };
    getProducts();
  }, []);

  const addItemHandler = (productId) => {
    // Add logic for handling item addition
    console.log(`Adding item with ID: ${productId}`);
  };

  return (
    <>
      <PageLayout />
      <div style={{ margin: '90px 40px' }}>
        {/* DashCategory component goes here */}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6 g-4 mt-5">
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.map((product, index) => (
            <div className="col" style={{maxWidth: '200px'}} key={index}>
              <div
                className={`card ${hovered === index ? 'shadow-lg' : 'shadow'} h-100 d-flex flex-column`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  className="card-img-top"
                  height={100}
                  width={100}
                  src={URL + product.images[0]}
                  alt={product.product_name}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category_type}</p>
                  <div className="d-flex justify-content-between mt-auto" style={{bottom:10}}>
                  <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                  <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="card add-card">
            <Link to="/add_product">
              <MdOutlineAddCircleOutline size={80} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}



export default SellerProducts;
