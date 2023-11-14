import './SellerProducts.css'

import { Link } from 'react-router-dom'
import { BsFillImageFill } from 'react-icons/bs'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import PageLayout from '../../../PageLayout/PageLayout'

function SellerProducts() {
    return (
        <>
            <PageLayout>
                <h2>Your Products</h2>
                <div className="row">
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
                    <div className="card">
                        <BsFillImageFill size={150} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">(title)</h5>
                            <p className="card-text">(about)</p>
                            <p className="card-text">(price)</p>
                            <p className="card-text">(quantity)</p>
                            <Link to="/product_details" className="btn btn-primary card-btn">View</Link>
                            <Link to="/edit_product" className="btn btn-secondary card-btn">Edit</Link>
                        </div>
                    </div>
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