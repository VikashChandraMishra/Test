import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate(null);

    const [applicant, setApplicant] = useState({ "firstname": "", "middlename": "", "lastname": "", "dob": "", "category": "", "qualification": "", "mobile": 0, "email": "", "gender": "", "registrationId": "", "disabilityPercentage": 0, "PwBD_UDID": 0, "PwBD_category": "", "age": "" })

    useEffect(() => {

        if (localStorage.getItem('authToken')) {

            const fetchData = async () => {

                const response = await fetch('http://127.0.0.1:5000/api/auth/applicant/fetch-data', {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': localStorage.getItem('authToken'),
                    },

                })

                const json = await response.json();

                if (json.success && json.applicant) {

                    let dob = json.applicant.dob.split('-');
                    let years = 2022 - parseInt(dob[0]);
                    let months = 10 - parseInt(dob[1]);
                    let days = 1 - parseInt(dob[2]);
                    let age = `${years} years, ${months} months and ${days} days`;
                    json.applicant.age = age;
                    setApplicant(json.applicant);
                }
                else navigate('/');

            }

            fetchData();
        } else navigate('/');
        // eslint-disable-next-line
    }, [])

    const apply = () => {
        navigate('/apply')
    }

    return (
        <div>
            <div className="col container my-4" style={{ minWidth: '300px' }}>
                <h5 className="text-center "><strong>User Profile:</strong></h5>
                <br />
                <br />
                <strong>Registration ID: </strong><span>{applicant.registrationId}</span>

                <div>

                    <div className="row border py-2">
                        <div className="col-3">
                            <strong>First Name:</strong>
                            <div>{applicant.firstname}</div>
                        </div>
                        <div className="col-5">
                            <strong>Middle Name:</strong>
                            <div>{applicant.middlename}</div>
                        </div>
                        <div className="col-4">
                            <strong>Last Name:</strong>
                            <div>{applicant.lastname}</div>
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-3">
                            <strong>Date of Birth:</strong>
                            <div>{applicant.dob}</div>
                        </div>
                        <div className="col-5">
                            <strong>Qualification:</strong>
                            <div>{applicant.qualification}</div>
                        </div>
                        <div className="col-4">
                            <strong>Category:</strong>
                            <div>{applicant.category}</div>
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-3">
                            <strong>Mobile:</strong>
                            <div>{applicant.mobile}</div>
                        </div>
                        <div className="col-5">
                            <strong>Email:</strong>
                            <div>{applicant.email}</div>
                        </div>
                        <div className="col-4">
                            <strong>PwBD Status:</strong>
                            {applicant.PwBD_category ? <div>Applicable</div> : <div>NIL</div>}
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-3">
                            <strong>Gender:</strong>
                            <div>{applicant.gender}</div>
                        </div>
                        <div className="col-5">
                            <strong>Age(as on 01-10-2022):</strong>
                            <div>{applicant.age}</div>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5 text-center">
                            <Link to="/Instructions.pdf" style={{ color: 'blue' }}>Form Fillup Instructions Manual</Link>
                        </div>
                        <div className="col-4 text-center">
                            <button className="btn btn-primary" onClick={apply} >Apply for Professorship</button>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <h5><strong>Application Status:</strong></h5>

            </div>
        </div>
    )
}

export default Profile;