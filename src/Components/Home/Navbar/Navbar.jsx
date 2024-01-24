import { Link } from "react-router-dom"
import { BiSearchAlt } from 'react-icons/bi'

function Navbar({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/home">Bejiness.com</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <form className="d-flex mx-auto">
                            <input className="form-control me-2 nav-search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary nav-search-btn"><BiSearchAlt size={20} /></button>
                        </form>
                        <div className="d-flex">
                            <Link to="/signup">
                                <button className="btn btn-primary me-2">Signup</button>
                            </Link>
                            <Link to="/login">
                                <button className="btn btn-outline-primary">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
           
        
        </>
    )
}

export default Navbar