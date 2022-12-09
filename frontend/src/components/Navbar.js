import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const logout = () => {
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
    }, [location])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://aimguwahati.edu.in/wp-content/uploads/2021/04/aim-Logo.jpg" width={50} height={50} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`} to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === 'reset-password' ? 'active' : ''}`} to="/reset-password">Reset Password</Link>
                            </li>
                            {
                                location.pathname !== '/' && location.pathname !== '/reset-password' && location.pathname !== '/register' && <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                                </li>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;