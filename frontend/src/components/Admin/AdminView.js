import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AcademicExp from "../ApplicantDetails/AcademicExp";
import Education from "../ApplicantDetails/Education";
import IndustryExp from "../ApplicantDetails/IndustryExp";
import PGTeachingExp from "../ApplicantDetails/PGTeachingExp";
import ResearchPapers from "../ApplicantDetails/ResearchPapers";
import SupervisionExp from "../ApplicantDetails/SupervisionExp";
import UGTeachingExp from "../ApplicantDetails/UGTeachingExp";
import '../../styles/table.css';

const AdminView = () => {

    const location = useLocation();

    const navigate = useNavigate(null);

    const [educationalQualifications, setEducationalQualifications] = useState([]);
    const [academicExperiences, setAcademicExperiences] = useState([]);
    const [industryExperiences, setIndustryExperiences] = useState([]);
    const [ugTeachingExperiences, setUgTeachingExperiences] = useState([]);
    const [pgTeachingExperiences, setPgTeachingExperiences] = useState([]);
    const [supervisionExperiences, setSupervisionExperiences] = useState([]);
    const [researchPapers, setResearchPapers] = useState([]);
    const [images, setImages] = useState({ "photo_path": "", "signature_path": "" });

    const approve = async (e) => {
        e.preventDefault();
        let confirmation = window.prompt("Confirm form approval?(Yes/No)");
        if (!(confirmation.toUpperCase() === 'yes'.toUpperCase()))
            return;
        const response = await fetch('http://65.0.115.124:5000/api/admin/approve-application', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ "application_id": location.state._id })
        })

        const json = await response.json();
        if (json.success) {
            navigate('/admin/dashboard');
        }
        else alert("Cannot process requests at the moment!");
    }

    const reject = async (e) => {
        e.preventDefault();
        let confirmation = window.prompt("Confirm form rejection?(Yes/No)");
        if (!(confirmation.toUpperCase() === 'yes'.toUpperCase()))
            return;
        const response = await fetch('http://65.0.115.124:5000/api/admin/reject-application', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ "application_id": location.state._id })
        })

        const json = await response.json();
        if (json.success) {
            navigate('/admin/dashboard')
        }
        else alert("Cannot process requests at the moment!");
    }

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://65.0.115.124:5000/api/admin/send-application-data', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ "application_id": location.state._id })

            })

            const json = await response.json();

            if (json.success) {
                document.getElementById('registrationId').innerText = json.applicant.registrationId;
                document.getElementById('firstname').innerText = json.applicant.firstname;
                document.getElementById('middlename').innerText = json.applicant.middlename;
                document.getElementById('lastname').innerText = json.applicant.lastname;
                document.getElementById('dob').innerText = json.applicant.dob;
                document.getElementById('qualification').innerText = json.applicant.qualification;
                document.getElementById('category').innerText = json.applicant.category;
                document.getElementById('email').innerText = json.applicant.email;
                document.getElementById('mobile').innerText = json.applicant.mobile;
                document.getElementById('gender').innerText = json.applicant.gender;
                document.getElementById('position').innerText = json.application.position;
                document.getElementById('total-acad-exp').innerText = json.application.total_academic_experience;
                document.getElementById('total-pro-exp').innerText = json.application.total_industry_experience;

                setEducationalQualifications(json.application.educational_qualification);
                setAcademicExperiences(json.application.academic_experience);
                setIndustryExperiences(json.application.industry_experience);
                setUgTeachingExperiences(json.application.ug_teaching_experience);
                setPgTeachingExperiences(json.application.pg_teaching_experience);
                setSupervisionExperiences(json.application.supervision_experience);
                setResearchPapers(json.application.research_papers);
                setImages(json.application.photos);
            }
            else navigate('/');

        }

        fetchData();
        // eslint-disable-next-line
    }, [])

    return (

        <div>
            <div className="container my-4 px-3 border " style={{ minWidth: '300px' }} id="application">
                <div className="mx-auto">
                    <div>

                        <div className="my-4">
                            <h5>1. General Information</h5>

                            <div className="row py-2 mx-1">
                                <div className="col-10">
                                    <strong>Registration ID: </strong><span id="registrationId"></span>
                                    <div className="row border py-2">
                                        <div className="col-4">
                                            <strong>First Name: </strong>
                                            <span id="firstname"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Middle Name: </strong>
                                            <span id="middlename"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Last Name: </strong>
                                            <span id="lastname"></span>
                                        </div>
                                    </div>
                                    <div className="row border py-2">
                                        <div className="col-4">
                                            <strong>Date of Birth: </strong>
                                            <span id="dob"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Qualification: </strong>
                                            <span id="qualification"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Category: </strong>
                                            <span id="category"></span>
                                        </div>
                                    </div>
                                    <div className="row border py-2">
                                        <div className="col-4">
                                            <strong>Mobile: </strong>
                                            <span id="mobile"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Email: </strong>
                                            <span id="email"></span>
                                        </div>
                                        <div className="col-4">
                                            <strong>Gender: </strong>
                                            <span id="gender"></span>
                                        </div>
                                    </div>
                                    <div className="row border py-2">
                                        <div className="col">
                                            <strong>Area of Preference: </strong>
                                            <span id="position"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-flex flex-column">
                                    <div className="mx-2 py-2 text-center">
                                        <img src={`http://65.0.115.124:5000/${images.photo_path}`} height="100px" width="100px" alt="Unable to display" id="photo" />
                                    </div>
                                    <div className="mx-2 py-2 text-center">
                                        <img src={`http://65.0.115.124:5000/${images.signature_path}`} height="60px" width="100px" alt="Unable to display" id="signature" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="my-4">
                            <h5>2. Educational Qualification</h5>
                            <div className="row py-2 mx-1">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Qualification</th>
                                            <th>Year/University/Institute/Board</th>
                                            <th>Percentage/Grade</th>
                                            <th>Subject(s)/Specialization</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {educationalQualifications.map((education) => {
                                            return <Education education={education} key={education._id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="my-4">
                            <h5>3. Academic Experience <i>(beginning with the present post/assignment)</i></h5>
                            <div className="row py-2 mx-1">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Post</th>
                                            <th>Organization</th>
                                            <th>Joining Date</th>
                                            <th>Leaving Date</th>
                                            <th>Description of duties</th>
                                            <th>Special nature of assignment, if any and key actions taken</th>
                                            <th>Experience in years and months</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {academicExperiences.map((experience) => {
                                            return <AcademicExp experience={experience} key={experience._id} />
                                        })}
                                    </tbody>
                                </table>
                                <div className="text-center my-2">
                                    <strong>Total Academic Experience: </strong>
                                    <span id="total-acad-exp"></span>
                                </div>

                            </div>
                        </div>


                        <div className="my-4">
                            <h5>4. Professional/ Industry Experience <i>(On full time basis)</i></h5>

                            <div className="row py-2 mx-1">
                                <table>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>Post</th>
                                            <th rowSpan={2}>Organization</th>
                                            <th colSpan={2}>Duration</th>
                                            <th rowSpan={2}>Experience in years and months</th>
                                            <th rowSpan={2}>Remarks</th>
                                        </tr>
                                        <tr>
                                            <th>From(Date)</th>
                                            <th>To(Date)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {industryExperiences.map((experience) => {
                                            return <IndustryExp experience={experience} key={experience._id} />
                                        })}
                                    </tbody>
                                </table>
                                <div className="text-center my-2">
                                    <strong>Total Professional/Industry Experience: </strong>
                                    <span id="total-pro-exp"></span>
                                </div>
                            </div>
                        </div>


                        <div className="my-4">
                            <h5>5. Teaching Experience <i>(Please list courses taught at different levels)</i></h5>

                            <div className="row py-2 mx-1">
                                <h5>A. Undergraduate Level</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Year</th>
                                            <th>Title of the course/ number of students</th>
                                            <th>Core or Elective</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ugTeachingExperiences.map((experience) => {
                                            return <UGTeachingExp experience={experience} key={experience._id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="row py-2 mx-1">
                                <h5>B. Postgraduate Level</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Year</th>
                                            <th>Title of the course/ number of students</th>
                                            <th>PGP/M.Phil/Ph.D/FPM/other</th>
                                            <th>Core or Elective</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pgTeachingExperiences.map((experience) => {
                                            return <PGTeachingExp experience={experience} key={experience._id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="row py-2 mx-1">
                                <h5>C. Students Supervised for M.Phil/ Ph.D or FPM Programme</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Year</th>
                                            <th>Number of students who have completed their dissertations - Direct Supervisor</th>
                                            <th>Number of students who have completed their dissertations - Member of Thesis Commitee</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {supervisionExperiences.map((experience) => {
                                            return <SupervisionExp experience={experience} key={experience._id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>


                        </div>

                        <div className="my-4">
                            <h5>6. Research Papers/ Publication etc. (Additional pages may be appended)</h5>

                            <div className="row py-2 mx-1">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Subject/ Title of the Research Paper</th>
                                            <th>Published in (Name, year and edition of the Journal, etc.)</th>
                                            <th style={{ width: '330px' }}>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {researchPapers.map((paper) => {
                                            return <ResearchPapers paper={paper} key={paper._id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="my-4 d-flex justify-content-between">
                            <button className="btn btn-danger" style={{ width: '150px' }} onClick={reject} >Reject</button>
                            <button className="btn btn-success" style={{ width: '150px' }} onClick={approve} >Approve</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminView;