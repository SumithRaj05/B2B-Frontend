import './PageLayout.css'

import { CgProfile } from 'react-icons/cg'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { useAuth } from '../../Auth/AuthContext';
import { useEffect, useState } from 'react';
import { GetUser } from '../../ApiCallModules/Apis';
import Logo from '../../../assets/logo.png'

function PageLayout({ children }) {
    const { setToken } = useAuth();

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetUser();
                setUserData(data);
            } catch (error) {
                console.error("Error occurred while fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.setItem("token", "");
        setToken(localStorage.getItem("token"));
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/dashboard">
                        <img src={Logo} className='navbar-logo'/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <form className="d-flex mx-auto">
                            <input className="form-control me-2 nav-search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary nav-search-btn"><BiSearchAlt size={20} /></button>
                        </form>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/view_cart" className="nav-link nav-cart">
                                    <FaCartPlus size={30} /><span className="d-lg-none">View Cart</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <div className="dropdown">

                                    <Link
                                        className="nav-link nav-profile dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <CgProfile size={30} />
                                        <span className="d-lg-none">Profile</span>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        {
                                            userData.account_type == "seller" ?
                                                <li>
                                                    <Link to="/seller_profile" className="dropdown-item">
                                                        Seller Profile
                                                    </Link>
                                                </li>
                                                :
                                                <li>
                                                    <Link to="/buyer_profile" className="dropdown-item">
                                                        Buyer Profile
                                                    </Link>
                                                </li>
                                        }
                                        <li>
                                            <Link to="/home" onClick={handleLogout} className="dropdown-item">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                {children}
            </div>

            <footer className="bg-dark text-center">
                <div className="text-center text-light p-3">
                    © 2024 Copyright <Link className="text-light" to="https://bejiness.com/">Bejiness.com</Link>
                </div>
            </footer>
        </>
    )
}

export default PageLayout