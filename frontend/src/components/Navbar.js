import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo.jpg';

const Navbar = () => {

    const location = useLocation();

    const logout = () => {
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
    }, [location])

    return (
        <div>
            {
                location.pathname === '/printPDF' ?
                    <div className='d-flex justify-content-center'>
                        <img src={Logo} className='my-2 mx-2' width={50} height={50} alt="unable to display logo at the moment" />
                        <h4 className='text-center my-3' id='heading'>ASSAM INSTITUTE OF MANAGEMENT</h4>
                    </div>
                    :
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid row">
                            <Link className="navbar-brand col-4 d-flex justify-content-end" id='logo' to="/">
                                <img src={Logo} width={50} height={50} alt="unable to display logo at the moment" />
                            </Link>
                            <h4 className='col-4 text-center' id='heading'>ASSAM INSTITUTE OF MANAGEMENT</h4>
                            <button className="navbar-toggler col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='ham-burger-button' >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse col-2" id="navbarSupportedContent" >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
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
            }
        </div>
    )
}

export default Navbar;