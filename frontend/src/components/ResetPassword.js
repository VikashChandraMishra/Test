import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const navigate = useNavigate(null);

    const [applicant, setApplicant] = useState({ "firstname": "", "middlename": "", "lastname": "", "dob": "" })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstname, middlename, lastname, dob } = applicant;

        const response = await fetch('http://127.0.0.1:5000/api/auth/applicant/reset-password', {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ firstname, middlename, lastname, dob })
        })

        const json = await response.json();

        if (json.success === true && json.message === 'password successfully reset') {
            navigate('/');
        }
        else alert("Please enter correct credentials");

        setApplicant({ "firstname": "", "middlename": "", "lastname": "", "dob": "" });
    }

    const onChange = (e) => {
        setApplicant({ ...applicant, [e.target.name]: e.target.value });
    }


    return (
        <div className="container d-flex justify-content-center">
            <div className='card col-4 my-4'>
                <p className="card-header text-center">Reset Password</p>
                <div className="card-body text-center">
                    <form className="form bg-light py-1 px-1" id="reset-password-form" onSubmit={handleSubmit}>
                        <div className="col form-group">
                            <label><strong>First Name </strong><small style={{ color: 'red' }}>*</small></label>
                            <input className="form-control" maxLength="30" type="text" id="firstname" name="firstname" style={{ textTransform: 'uppercase' }} value={applicant.firstname} onChange={onChange} required />
                        </div>

                        <div className="col form-group">
                            <label><strong>Middle Name </strong></label>
                            <input className="form-control" maxLength="30" type="text" id="middlename" name="middlename" style={{ textTransform: 'uppercase' }} value={applicant.middlename} onChange={onChange} />
                        </div>
                        <div className="col form-group">
                            <label><strong>Last Name </strong><small style={{ color: 'red' }}>*</small></label>
                            <input className="form-control" maxLength="30" type="text" id="lastname" name="lastname" style={{ textTransform: 'uppercase' }} value={applicant.lastname} onChange={onChange} required />
                        </div>

                        <div className="col form-group">
                            <label><strong>Dob DD-MM-YYYY </strong><small style={{ color: 'red' }}>*</small></label>
                            <input className="form-control" type="date" id="dob" name="dob" value={applicant.dob} onChange={onChange} required />
                        </div>

                        <div className='form-group'>
                            <button type="submit" className="btn btn-success btn-sm my-3" >Submit</button>
                        </div>
                    </form>

                    <div className="card-footer">
                        Registration ID and new password will be shared with you via email after successful password reset
                        <br />
                        <br />
                        <div className="col">
                            <Link to="/" className="btn btn-primary btn-sm">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword;