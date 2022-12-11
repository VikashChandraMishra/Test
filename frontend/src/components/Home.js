import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate(null);

    const [applicant, setApplicant] = useState({ "registrationId": "", "password": "" })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { registrationId, password } = applicant;

        const response = await fetch('http://65.0.115.124:5000/api/applicant/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ registrationId, password })
        })

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('authToken', json.authToken)
            navigate('/applicant/profile');
        }
        else alert("Invalid credentials!");

        setApplicant({ "registrationId": "", "password": "" });
    }

    const onChange = (e) => {
        setApplicant({ ...applicant, [e.target.name]: e.target.value });
    }


    return (
        <div className="container d-flex justify-content-center">
            <div className='card col-4 my-4'>
                <p className="card-header text-center">Login</p>
                <div className="card-body text-center">
                    <form className="form bg-light py-1 px-1" id="login-form" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="registrationId" className="form-label">
                                <strong>Registration ID</strong>
                            </label>
                            <input type="text" className="form-control" id='registrationId' name='registrationId' value={applicant.registrationId} onChange={onChange} required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input type="password" className="form-control" id='password' name='password' value={applicant.password} onChange={onChange} required />
                        </div>

                        <div className='form-group'>
                            <button type="submit" className="btn btn-success btn-sm my-3" >Submit</button>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;