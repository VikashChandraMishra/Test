import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [admin, setAdmin] = useState({ "username": "", "password": "" });
    const [isInvalid, setIsInvalid] = useState(false);

    const navigate = useNavigate(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = admin;

        const response = await fetch('http://13.114.152.118:5000/api/admin/login', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ username, password })
        })

        const json = await response.json();

        if (json.success === true && json.message === 'admin verified') {
            navigate('/admin/dashboard');
        }
        else setIsInvalid(true);

        setAdmin({ username: "", password: "" });
    }

    const onChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className='card col-4 my-4'>
                <p className="card-header text-center">Admin Login</p>
                <div className="card-body text-center">

                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor="registrationId" className="form-label">
                                <strong>Username</strong>
                            </label>
                            <input type="text" className="form-control" id='username' name='username' value={admin.username} onChange={onChange} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input type="password" className="form-control" id='password' name='password' value={admin.password} onChange={onChange} />
                        </div>

                        <div className='form-group'>
                            <button type="submit" className="btn btn-success btn-sm my-3" id='submit' name='submit' >Submit</button>
                        </div>
                        {isInvalid && <span id="error" style={{ color: 'red' }} >Enter correct credentials</span>}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;