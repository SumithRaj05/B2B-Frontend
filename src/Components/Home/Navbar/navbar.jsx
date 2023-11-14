import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">Bejiness.com</a>

                <form className="d-flex mx-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary">Search</button>
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
        </nav>
    )
}

export default Navbar