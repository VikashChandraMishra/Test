import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className='card col-4 my-4'>
                <p className="card-header text-center">Login</p>
                <div className="card-body text-center">
                    <form>

                        <div className='form-group'>
                            <label htmlFor="registrationId" className="form-label">
                                <strong>Registration ID</strong>
                            </label>
                            <input type="text" className="form-control" id='registrationId' name='registrationId' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input type="password" className="form-control" id='password' name='password' />
                        </div>

                        <div className='form-group'>
                            <input type="submit" className="btn btn-success btn-sm my-3" id='submit' name='submit' value='Submit' />
                        </div>

                    </form>
                    
                    <div className="card-footer">
                        Registration ID and password are shared with you via email after successful registration
                        <br />
                        <br />
                        <div className="row mb-3">
                            <div className="col">
                                <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
                            </div>
                            <div className="col">
                                <Link to="/reset-password" className="btn btn-primary btn-sm">Reset Password</Link>
                            </div>
                        </div>
                        <center>
                            <Link to="/Instructions.pdf">Form Fillup Instructions Manual</Link>
                            <br />
                            <small className="text-danger">For any queries please contact us at admin@asrlm-recruitment.in</small>
                        </center>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;