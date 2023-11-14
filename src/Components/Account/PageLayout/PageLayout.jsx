import './PageLayout.css'

import { CgProfile } from 'react-icons/cg'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function PageLayout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/dashboard">Bejiness.com</Link>

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
                                <Link to="/profile" className="nav-link nav-profile">
                                    <CgProfile size={30} /><span class="d-lg-none">Profile</span>
                                </Link>
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
                    © 2023 Copyright <Link className="text-light" to="https://bejiness.com/">Bejiness.com</Link>
                </div>
            </footer>
        </>
    )
}

export default PageLayout