import React, { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';
import { GetUser } from '../../ApiCallModules/Apis';
import './PageLayout.css';

export default function PageLayout({ children }) {
  const { setToken } = useAuth();
  const [userData, setUserData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUser();
      setUserData(data);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.setItem('token', '');
    setToken(localStorage.getItem('token'));
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-dark fixed-top`}
        style={{ transition: 'background 0.3s, color 0.3s' }}
      >
        <div className="container" style={{ maxWidth: '1100px' }}>
          <a className={`navbar-brand text-white font-weight-bold`} href="#">
            <img
              src="/home/bejiness-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Bejiness.com
          </a>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '22px' }}
            />
            <BiSearchAlt size={20} />
          </div>

          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData.account_type === 'seller' && (
                <li className="nav-item">
                  <Link to="/view_cart" className="nav-link nav-cart">
                    <IoNotificationsSharp color='white' size={30} />
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link to="/view_cart" className="nav-link nav-cart">
                  <FaCartPlus color='white' size={30} />
                  <span className="d-lg-none">View Cart</span>
                </Link>
              </li>

              <li className="nav-item">
                <div className="dropdown" >
                  <Link
                    className="nav-link nav-profile dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CgProfile color='white' size={30} />
                    <span className="d-lg-none" >Profile</span>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown" 
                  >
                    {userData.account_type === 'seller' ? (
                      <li>
                        <Link to="/seller_profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/buyer_profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>
                    )}
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

      <div className="container container-pagelayout">{children}</div>
    </>
  );
}
