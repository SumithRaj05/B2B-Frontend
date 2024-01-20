import './SellerProducts.css'

import { Link } from 'react-router-dom'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import PageLayout from '../../../PageLayout/PageLayout'
import { useEffect, useState } from 'react'
import { URL } from '../../../../Auth/Auth'

function SellerProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProducts = async () => {
            await fetch(URL + '/api/products/seller', {
                method: 'GET',
                headers: {
                    'token': localStorage.getItem('token')
                }
            }).then((res) => res.json().then((data) => {
                setProducts(data.products)
            })).catch((err) => {
                console.log(err.message);
                return <p>{err.message}</p>
            })
        }
        getProducts()

    }, [])

    return (
        <>
            <PageLayout>
                <h2>Your Products</h2>
                <div className="row">

                    {
                        products.map((product, index) => (
                            <div className="card" key={index}>
                                <img className="card-img-top" height={100} width={100} src={URL + product.images[0]} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.product_name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.category_type}</p>
                                    <Link to={"/product_details/" + product.product_id} className="btn btn-primary card-btn">Preview</Link>
                                    <Link to={"/edit_product/" + product.product_id} className="btn btn-secondary card-btn">Edit</Link>
                                </div>
                            </div>
                        ))

                    }

                    <div className="card add-card">
                        <Link to="/add_product">
                            <MdOutlineAddCircleOutline size={80} />
                        </Link>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}

export default SellerProducts