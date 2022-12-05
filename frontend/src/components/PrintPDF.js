import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AcademicExp from "./ApplicantDetails/AcademicExp";
import Education from "./ApplicantDetails/Education";
import IndustryExp from "./ApplicantDetails/IndustryExp";
import PGTeachingExp from "./ApplicantDetails/PGTeachingExp";
import ResearchPapers from "./ApplicantDetails/ResearchPapers";
import SupervisionExp from "./ApplicantDetails/SupervisionExp";
import UGTeachingExp from "./ApplicantDetails/UGTeachingExp";
import '../../src/styles/table.css';

const PrintPDF = () => {

    const location = useLocation();

    const navigate = useNavigate(null);

    const [generalInformation, setGeneralInformation] = useState([]);
    const [educationalQualifications, setEducationalQualifications] = useState([]);
    const [academicExperiences, setAcademicExperiences] = useState([]);
    const [industryExperiences, setIndustryExperiences] = useState([]);
    const [ugTeachingExperiences, setUgTeachingExperiences] = useState([]);
    const [pgTeachingExperiences, setPgTeachingExperiences] = useState([]);
    const [supervisionExperiences, setSupervisionExperiences] = useState([]);
    const [researchPapers, setResearchPapers] = useState([]);
    const [images, setImages] = useState({ "photo_path": "", "signature_path": "" });

    const print = () => {

        const printButton = document.getElementById('print-button');
        printButton.style.display = 'none';
        window.print();
        printButton.style.display = 'initial';
    }

    useEffect(() => {

        if (localStorage.getItem('authToken')) {
            const fetchData = async () => {
                const response = await fetch('http://13.114.152.118:5000/api/applicant/fetch-application-data', {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': localStorage.getItem('authToken'),
                    },

                    body: JSON.stringify({"application_id":location.state._id})

                })

                const json = await response.json();

                if (json.success) {
                    document.getElementById('name').innerHTML = json.applicant.firstname + ' ' + json.applicant.middlename + ' ' + json.applicant.lastname;
                    document.getElementById('dob').innerHTML = json.applicant.dob;
                    document.getElementById('email').innerHTML = json.applicant.email;
                    document.getElementById('mobile').innerHTML = json.applicant.mobile;
                    document.getElementById('position').innerHTML = json.application.position;

                    setGeneralInformation(json.application.general_information);
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
        } else navigate('/');
        // eslint-disable-next-line
    }, [])

    return (

        <div>
            <div className="container my-3">
                <button className="btn btn-success" style={{ width: '100px' }} onClick={print} id="print-button" >Print</button>
            </div>
            <div className="container my-4 px-3" style={{ minWidth: '300px' }} id="application">
                <div className="mx-auto">
                    <h3 className="text-center">Application For The Post Of Asst. Professor</h3>
                    <div>

                        <div className="my-4">
                            <h5>1. General Information</h5>
                            <div className="row py-2">
                                <div className="col-4 d-flex flex-column">
                                    <span>Area of Preference:</span>
                                    <span>Name of the Applicant:</span>
                                    <span>Date of Birth:</span>
                                    <span>Email:</span>
                                    <span>Mobile Number:</span>
                                    <span>Correspondence Address:</span>
                                    <span>Permanent Address:</span>
                                </div>
                                <div className="col-4 d-flex flex-column">
                                    <span id="position"></span>
                                    <span id="name"></span>
                                    <span id="dob"></span>
                                    <span id="email"></span>
                                    <span id="mobile"></span>
                                    <span>{generalInformation.correspondence_address}</span>
                                    <span>{generalInformation.permanent_address}</span>
                                </div>
                                <div className="col-4 d-flex flex-column">
                                    <div className="mx-2 text-center">
                                        <div>Photo</div>
                                        <img src={`http://13.114.152.118:5000/${images.photo_path}`} height="80px" width="80px" alt="Unable to display" id="photo" />
                                    </div>
                                    <div className="mx-2 text-center">
                                        <div>Signature</div>
                                        <img src={`http://13.114.152.118:5000/${images.signature_path}`} height="60px" width="120px" alt="Unable to display" id="signature" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="my-4">
                            <h5>2. Educational Qualification</h5>
                            <div className="row py-2">
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
                            <div className="row py-2">
                                <table border={2}>
                                    <thead>
                                        <tr>
                                            <th>Name of the post/ dates of joining and leaving</th>
                                            <th>Name of the Organization</th>
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
                            </div>
                        </div>


                        <div className="my-4">
                            <h5>4. Professional/ Industry Experience <i>(On full time basis)</i></h5>

                            <div className="row py-2">
                                <table border={2}>
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
                            </div>
                        </div>


                        <div className="my-4">
                            <h5>5. Teaching Experience <i>(Please list courses taught at different levels)</i></h5>

                            <div className="row py-2">
                                <h5>A. Undergraduate Level</h5>
                                <table border={2}>
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

                            <div className="row py-2">
                                <h5>B. Postgraduate Level</h5>
                                <table border={2}>
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

                            <div className="row py-2">
                                <h5>C. Students Supervised for M.Phil/ Ph.D or FPM Programme</h5>
                                <table border={2}>
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

                            <div className="row py-2">
                                <table border={2}>
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

                        <div>
                            <h5>7. Declaration</h5>

                            <p> I, hereby declare that all the statements/particulars made/furnished in this application are true, complete and correct to the best of my knowledge and belief. I also declare and fully understand that in the event of any information furnished being found false or incorrect at any stage, my application/candidature is liable to be summarily rejected and if I am already appointed,  my services are liable to be terminated without any notice from the post.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintPDF;