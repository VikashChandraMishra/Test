import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Status from "./Status";

const Profile = () => {

    const navigate = useNavigate(null);

    const [applicant, setApplicant] = useState({ "firstname": "", "middlename": "", "lastname": "", "dob": "", "category": "", "qualification": "", "mobile": 0, "email": "", "gender": "", "registrationId": "", "disabilityPercentage": 0, "PwBD_UDID": 0, "PwBD_category": "", "age": "" })

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        if (localStorage.getItem('authToken')) {

            const fetchData = async () => {

                const response = await fetch('http://65.0.115.124:5000/api/applicant/fetch-data', {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': localStorage.getItem('authToken'),
                    },

                })

                const json = await response.json();

                if (json.success) {

                    let dob = json.applicant.dob.split('-');
                    let years = 2022 - parseInt(dob[0]);
                    let months = 10 - parseInt(dob[1]);
                    if (months < 0 && years > 0) {
                        months = 12 + months;
                        years -= 1;
                    }
                    let date = parseInt(dob[2]);
                    let days = 0;
                    if (date === 1) days = 0;
                    else {
                        days = date;
                        months -= 1;
                        switch (parseInt(dob[1])) {
                            case 1: days = 31 - days; break;
                            case 2: days = 28 - days; break;
                            case 3: days = 31 - days; break;
                            case 4: days = 30 - days; break;
                            case 5: days = 31 - days; break;
                            case 6: days = 30 - days; break;
                            case 7: days = 31 - days; break;
                            case 8: days = 31 - days; break;
                            case 9: days = 30 - days; break;
                            case 10: days = 31 - days; break;
                            case 11: days = 30 - days; break;
                            case 12: days = 31 - days; break;
                            default: break;
                        }
                    }
                    let age = `${years} years, ${months} months and ${days} days`;
                    json.applicant.age = age;
                    setApplicant(json.applicant);

                    const response = await fetch('http://65.0.115.124:5000/api/applicant/fetch-application-status', {
                        method: 'GET',

                        headers: {
                            'Content-Type': 'application/json',
                            'authToken': localStorage.getItem('authToken'),
                        },

                    })

                    const res = await response.json();

                    if (res.success) {
                        setApplications(res.applications);
                        if (res.applications[0]) {
                            document.getElementById('apply').disabled = true;
                        }
                    }

                }
                else navigate('/');

            }

            fetchData();
        } else navigate('/');
        // eslint-disable-next-line
    }, [])

    const apply = () => {
        navigate('/positions')
    }

    return (
        <div>
            <div className="col container my-4" id="profile">
                <h5 className="text-center"><strong>User Profile:</strong></h5>
                <br />
                <br />
                <strong>Registration ID: </strong><span>{applicant.registrationId}</span>

                <div id="details">
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
                            <div id="profile-email">{applicant.email}</div>
                        </div>
                        <div className="col-3">
                            <strong>Gender:</strong>
                            <div>{applicant.gender}</div>
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-5">
                            <strong>Age(as on 01-10-2022):</strong>
                            <div>{applicant.age}</div>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5">
                        </div>
                        <div className="col-4 text-center">
                            <button className="btn btn-primary" id="apply" onClick={apply} >Apply</button>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <h5><strong>Application Status:</strong></h5>
                <div id="status">
                    <div className="row bg-dark text-white text-center py-1">
                        <strong className="col-2">Application ID</strong>
                        <strong className="col-3">Position</strong>
                        <strong className="col-3">Status</strong>
                        <strong className="col-3">Remark</strong>
                        <strong className="col-1">Action</strong>
                    </div>
                    <div>
                        {
                            applications ?
                                applications.map((application) => {
                                    return <Status application={application} key={application._id} />;
                                }) : 'You have not applied for any positions yet'
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;