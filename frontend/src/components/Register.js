import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate(null);

    const [applicant, setApplicant] = useState({ "firstname": "", "middlename": "", "lastname": "", "dob": "", "category": "", "qualification": "", "mobile": 0, "email": "", "gender": "" })


    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = document.getElementById('error');

        const { firstname, middlename, lastname, dob, category, qualification, mobile, email, gender } = applicant;

        let body = { firstname, middlename, lastname, dob, category, qualification, mobile, email, gender }


        if (mobile >= 10000000000 || mobile <= 5000000000) {
            error.innerHTML = 'Invalid mobile number';
            return;
        }

        const response = await fetch('http://13.114.152.118:5000/api/applicant/registration', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(body)
        })

        const json = await response.json();

        if (json.success === true && json.message === 'applicant successfully registered') {
            navigate('/');
        }
        else alert("A user with the given email ID or mobile number already exists!");

        setApplicant({ "firstname": "", "middlename": "", "lastname": "", "dob": "", "category": "", "qualification": "", "mobile": 0, "email": "", "gender": "" });
    }

    const onChange = (e) => {
        setApplicant({ ...applicant, [e.target.name]: e.target.value });
    }


    return (
        <div>
            <div className="col container text-center my-4" style={{ minWidth: '300px' }}>
                <div className="card mx-auto">
                    <p className="card-header">Applicant Registration</p>
                    <div className="card-body">

                        <p className="text-start">Fields marked with <small style={{ color: 'red' }}>*</small> are mandatory. Read the below instructions carefully, before filling the form:
                            <br />
                            1. Candidate has to fill in the below mentioned details to receive the User ID and Password.
                            <br />
                            2. Candidate will receive the Registration Id and Password on the registered email address.
                            <br />
                            3. Candidate can login with the Registration Id and Password to complete the application form
                            <br />
                            4. Candidate must provide Correct Name, Date of Birth, Mobile Number and Email Address as these details cannot be changed once the registration is complete.
                        </p>

                        <form className="form bg-light py-1 px-1" id="register-form" onSubmit={handleSubmit}>
                            <div className="row py-2">
                                <div className="col form-group">
                                    <label>First Name <small style={{ color: 'red' }}>*</small></label>
                                    <input className="form-control" maxLength="30" type="text" id="firstname" name="firstname" style={{ textTransform: 'uppercase' }} value={applicant.firstname} onChange={onChange} required />
                                </div>

                                <div className="col form-group">
                                    <label>Middle Name</label>
                                    <input className="form-control" maxLength="30" type="text" id="middlename" name="middlename" style={{ textTransform: 'uppercase' }} value={applicant.middlename} onChange={onChange} />
                                </div>
                                <div className="col form-group">
                                    <label>Last Name <small style={{ color: 'red' }}>*</small></label>
                                    <input className="form-control" maxLength="30" type="text" id="lastname" name="lastname" style={{ textTransform: 'uppercase' }} value={applicant.lastname} onChange={onChange} required />
                                </div>
                            </div>
                            <div className="row py-1">
                                <div className="col form-group">
                                    <label>Dob DD-MM-YYYY <small style={{ color: 'red' }}>*</small></label>
                                    <input className="form-control" type="date" id="dob" name="dob" value={applicant.dob} onChange={onChange} required />
                                </div>
                                <div className="col form-group">
                                    <label>Category <small style={{ color: 'red' }}>*</small></label>
                                    <select className="form-control" type="text" id="category" name="category" value={applicant.category} onChange={onChange} required >
                                        <option> -- select an option -- </option>
                                        <option value="UR">UR</option>
                                        <option value="SC">SC</option>
                                        <option value="OBC/MOBC">OBC/MOBC</option>
                                        <option value="ST(P)">ST(P)</option>
                                        <option value="ST(H)">ST(H)</option>
                                        <option value="EWS">EWS</option>
                                    </select>
                                </div>
                                <div className="col form-group">
                                    <label>Qualification <small style={{ color: 'red' }}>*</small></label>
                                    <select className="form-control" type="text" id="qualification" name="qualification" value={applicant.qualification} onChange={onChange} required >
                                        <option> -- select an option -- </option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Post-Graduate Degree">Post-Graduate Degree</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div className="col form-group">
                                    <label>Mobile <small style={{ color: 'red' }}>*</small></label>
                                    <input className="form-control" type="number" id="mobile" name="mobile" value={applicant.mobile} onChange={onChange} required />
                                </div>
                                <div className="col form-group">
                                    <label>Email <small style={{ color: 'red' }}>*</small></label>
                                    <input className="form-control" maxLength="100" type="email" id="email" name="email" value={applicant.email} onChange={onChange} required />
                                </div>
                                <div className="col form-group"><label>Gender <small style={{ color: 'red' }}>*</small></label>
                                    <select className="form-control" type="text" id="gender" name="gender" value={applicant.gender} onChange={onChange} required >
                                        <option> -- select an option -- </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col">
                                <button className="btn btn-success btn-sm px-5" type="submit">Submit</button>
                            </div>
                            <br />
                            <br />
                            <span id="error" style={{ color: 'red' }}></span>
                        </form>
                    </div>
                    <div className="card-footer">
                        Registration Id and password are shared with you via email after successful registration
                        <br />
                        <br />
                        <div className="row mb-3">
                            <div className="col">
                                <Link to="/" className="btn btn-primary btn-sm">Login</Link>
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

export default Register;