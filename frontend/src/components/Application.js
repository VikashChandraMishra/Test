import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AcadRows from "./ApplicationComponentRows/AcadRows";
import PGRows from "./ApplicationComponentRows/PGRows";
import ProRows from "./ApplicationComponentRows/ProRows";
import RPRows from "./ApplicationComponentRows/RPRows";
import SupRows from "./ApplicationComponentRows/SupRows";
import UGRows from "./ApplicationComponentRows/UGRows";

const Application = () => {

  const navigate = useNavigate(null);
  const [isReady, setIsReady] = useState(false);
  const [rowNumbers, setRowNumbers] = useState({ "acadExp": 1, "proExp": 1, "ugExp": 1, "pgExp": 1, "supExp": 1, "rpExp": 1 })

  const checkReady = () => {
    if (isReady === false) setIsReady(true);
    else if (isReady === true) setIsReady(false);
  }

  const addRow = (e) => {
    e.preventDefault();
    let currentNumber = 0;
    if (e.target.value === "rpExp") {
      currentNumber = rowNumbers.rpExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        rpExp: currentNumber
      });
    } else if (e.target.value === "proExp") {
      currentNumber = rowNumbers.proExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        proExp: currentNumber
      });
    } else if (e.target.value === "ugExp") {
      currentNumber = rowNumbers.ugExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        ugExp: currentNumber
      });
    } else if (e.target.value === "pgExp") {
      currentNumber = rowNumbers.pgExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        pgExp: currentNumber
      });
    } else if (e.target.value === "supExp") {
      currentNumber = rowNumbers.supExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        supExp: currentNumber
      });
    } if (e.target.value === "acadExp") {
      currentNumber = rowNumbers.acadExp;
      currentNumber += 1;
      setRowNumbers({
        ...rowNumbers,
        acadExp: currentNumber
      });
    }

  }

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/applicant/fetch-data', {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
            'authToken': localStorage.getItem('authToken'),
          },

        })

        const json = await response.json();

        if (json.success && json.applicant) {
          document.getElementById('name').value = json.applicant.firstname + ' ' + json.applicant.middlename + ' ' + json.applicant.lastname;
          document.getElementById('dob').value = json.applicant.dob;
          document.getElementById('email').value = json.applicant.email;
          document.getElementById('mobile').value = json.applicant.mobile;
        }
        else navigate('/');

      }

      fetchData();
    } else navigate('/');
    // eslint-disable-next-line
  }, [])


  const errorAlert = () => { alert('All fields are mandatory'); }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let position = document.getElementById('position').value;
    let correspondence_address = document.getElementById('correspondence_address').value;
    let permanent_address = document.getElementById('permanent_address').value;

    if (!position || !correspondence_address || !permanent_address) { errorAlert(); return; }

    let eduDegree = document.getElementsByClassName('edu-degree');
    let eduDetails = document.getElementsByClassName('edu-details');
    let eduGrade = document.getElementsByClassName('edu-grade');
    let eduSubjects = document.getElementsByClassName('edu-subjects');
    let eduRemarks = document.getElementsByClassName('edu-remarks');
    let educational_qualification = [];

    for (let i = 0; i < 5; i++) {
      if (!eduDegree[i].innerText || !eduDetails[i].value || !eduGrade[i].value || !eduSubjects[i].value || !eduRemarks[i].value) {
        errorAlert();
        return;
      }
      educational_qualification.push({ degree: eduDegree[i].innerText, details: eduDetails[i].value, grade: eduGrade[i].value, subjects: eduSubjects[i].value, remarks: eduRemarks[i].value })
    }

    let acadPost = document.getElementsByClassName('acad-post');
    let acadOrganization = document.getElementsByClassName('acad-organization');
    let acadDutyDesc = document.getElementsByClassName('acad-duty-desc');
    let acadSpecDuty = document.getElementsByClassName('acad-duty-spec');
    let acadExp = document.getElementsByClassName('acad-exp');
    let acadRemarks = document.getElementsByClassName('acad-remarks');
    let academic_experience = [];

    for (let i = 0; i < rowNumbers.acadExp; i++) {
      if (!acadPost[i].value || !acadOrganization[i].value || !acadDutyDesc[i].value || !acadSpecDuty[i].value || !acadExp[i].value || !acadRemarks[i].value) {
        errorAlert();
        return;
      }
      academic_experience.push({ post: acadPost[i].value, organization: acadOrganization[i].value, duty: acadDutyDesc[i].value, special_duty: acadSpecDuty[i].value, experience: acadExp[i].value, remarks: acadRemarks[i].value, })
    }

    let proPost = document.getElementsByClassName('pro-post');
    let proOrganization = document.getElementsByClassName('pro-organization');
    let proBegin = document.getElementsByClassName('pro-begin');
    let proEnd = document.getElementsByClassName('pro-end');
    let proExp = document.getElementsByClassName('pro-exp');
    let proRemarks = document.getElementsByClassName('pro-remarks');
    let industry_experience = [];

    for (let i = 0; i < rowNumbers.proExp; i++) {
      if (!proPost[i].value || !proOrganization[i].value || !proBegin[i].value || !proEnd[i].value || !proExp[i].value || !proRemarks[i].value) {
        errorAlert();
        return;
      }
      industry_experience.push({ post: proPost[i].value, organization: proOrganization[i].value, begin_date: proBegin[i].value, end_date: proEnd[i].value, experience: proExp[i].value, remarks: proRemarks[i].value, })
    }

    let ugYear = document.getElementsByClassName('ug-year');
    let ugCourse = document.getElementsByClassName('ug-course');
    let ugSubjects = document.getElementsByClassName('ug-subjects');
    let ugRemarks = document.getElementsByClassName('ug-remarks');
    let ug_teaching_experience = [];

    for (let i = 0; i < rowNumbers.ugExp; i++) {
      if (!ugYear[i].value || !ugCourse[i].value || !ugSubjects[i].value || !ugRemarks[i].value) {
        errorAlert();
        return;
      }
      ug_teaching_experience.push({ year: ugYear[i].value, course: ugCourse[i].value, subjects: ugSubjects[i].value, remarks: ugRemarks[i].value, })
    }

    let pgYear = document.getElementsByClassName('pg-year');
    let pgCourse = document.getElementsByClassName('pg-course');
    let pgSubjects = document.getElementsByClassName('pg-subjects');
    let pgDegree = document.getElementsByClassName('pg-degree');
    let pgRemarks = document.getElementsByClassName('pg-remarks');
    let pg_teaching_experience = [];

    for (let i = 0; i < rowNumbers.pgExp; i++) {
      if (!pgYear[i].value || !pgCourse[i].value || !pgSubjects[i].value || !pgDegree[i].value || !pgRemarks[i].value) {
        errorAlert();
        return;
      }
      pg_teaching_experience.push({ year: pgYear[i].value, course: pgCourse[i].value, subjects: pgSubjects[i].value, degree: pgDegree[i].value, remarks: pgRemarks[i].value, })
    }

    let ssYear = document.getElementsByClassName('ss-year');
    let ss_num_ds = document.getElementsByClassName('ss-num-ds');
    let ss_num_mtc = document.getElementsByClassName('ss-num-mtc');
    let ssRemarks = document.getElementsByClassName('ss-remarks');
    let supervision_experience = [];

    for (let i = 0; i < rowNumbers.supExp; i++) {
      if (!ssYear[i].value || !ss_num_ds[i].value || !ss_num_mtc[i].value || !ssRemarks[i].value) {
        errorAlert();
        return;
      }
      supervision_experience.push({ year: ssYear[i].value, number_DS: ss_num_ds[i].value, number_MTC: ss_num_mtc[i].value, remarks: ssRemarks[i].value, })
    }

    let rpTitle = document.getElementsByClassName('rp-title');
    let rpDetails = document.getElementsByClassName('rp-details');
    let rpRemarks = document.getElementsByClassName('rp-remarks');
    let research_papers = [];

    for (let i = 0; i < rowNumbers.rpExp; i++) {
      if (!rpTitle[i].value || !rpDetails[i].value || !rpRemarks[i].value) {
        errorAlert();
        return;
      }
      research_papers.push({ title: rpTitle[i].value, details: rpDetails[i].value, remarks: rpRemarks[i].value, })
    }


    const response = await fetch('http://13.114.152.118:5000/api/applicant/submit-form', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('authToken'),
      },

      body: JSON.stringify({ position, correspondence_address, permanent_address, educational_qualification, academic_experience, industry_experience, ug_teaching_experience, pg_teaching_experience, supervision_experience, research_papers })
    })

    const json = await response.json();

    if (json.success === true && json.message === 'application successfully submitted') {
      navigate('/upload', { state: { application_id: json.id } });
    }
    else alert("Application submitted with faulty data!");

  }

  return (
    <div>
      <div className="col container my-4 text-center" style={{ minWidth: '300px' }}>
        <div className="card mx-auto">
          <p className="card-header">Application</p>
          <div className="card-body">
            <form className="form bg-light py-1 px-1" encType="multipart/form-data">
              <div className="my-4">
                <h5>1. General Information</h5>


                <div className="col form-group">
                  <label>Area of Preference</label>
                  <input className="form-control" type="text" id="position" required />
                </div>

                <div className="row py-2">
                  <div className="col form-group">
                    <label>Name of the Applicant</label>
                    <input type="text" className="form-control" id="name" disabled />
                  </div>

                  <div className="col form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" id="dob" disabled />
                  </div>

                  <div className="col form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" id="email" disabled />
                  </div>
                </div>

                <div className="row py-2">
                  <div className="col form-group">
                    <label>Correspondence Address</label>
                    <input type="text" className="form-control" id="correspondence_address" required />
                  </div>

                  <div className="col form-group">
                    <label>Permanent Address</label>
                    <input type="text" className="form-control" id="permanent_address" required />
                  </div>

                  <div className="col form-group">
                    <label>Mobile Number</label>
                    <input type="number" className="form-control" id="mobile" required disabled />
                  </div>
                </div>

              </div>

              <div className="my-4">
                <h5>2. Educational Qualification</h5>

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
                    <tr>
                      <td className="form-control edu-degree" >Ph.D</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td className="form-control edu-degree" >Post Graduation, MBA</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td className="form-control edu-degree">Graduation</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td className="form-control edu-degree">Higher Secondary(H.S.) Pre Degree Science</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td className="form-control edu-degree">H.S.L.C.</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td className="form-control edu-degree">NET/SLET</td>
                      <td>
                        <input type="text" className="form-control edu-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-grade" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-subjects" />
                      </td>
                      <td>
                        <input type="text" className="form-control edu-remarks" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-4">
                <h5>3. Academic Experience <i>(beginning with the present post/assignment)</i></h5>

                <table>
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
                    {
                      Array.from({ length: rowNumbers.acadExp })
                        .map((_, index) => (
                          <AcadRows key={index} />
                        )
                        )
                    }
                  </tbody>
                </table>
                <div className="my-2 d-flex justify-content-end">
                  <button className="btn btn-success" value={"acadExp"} onClick={addRow} >Add Row</button>
                </div>
              </div>

              <div className="my-4">
                <h5>4. Professional/ Industry Experience <i>(On full time basis)</i></h5>

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
                    {
                      Array.from({ length: rowNumbers.proExp })
                        .map((_, index) => (
                          <ProRows key={index} />
                        )
                        )
                    }
                  </tbody>
                </table>
                <div className="my-2 d-flex justify-content-end">
                  <button className="btn btn-success" value={"proExp"} onClick={addRow} >Add Row</button>
                </div>
              </div>

              <div className="my-4">
                <h5>5. Teaching Experience <i>(Please list courses taught at different levels)</i></h5>

                <div className="my-4 px-3">
                  <h5>A. Undergraduate Level</h5>
                  <table style={{ width: '1050px' }}>
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Title of the course/ number of students</th>
                        <th>Core or Elective</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Array.from({ length: rowNumbers.ugExp })
                          .map((_, index) => (
                            <UGRows key={index} />
                          )
                          )
                      }
                    </tbody>
                  </table>
                  <div className="my-2 d-flex justify-content-end">
                    <button className="btn btn-success" value={"ugExp"} onClick={addRow} >Add Row</button>
                  </div>

                </div>

                <div className="my-4 px-3">
                  <h5>B. Postgraduate Level</h5>
                  <table style={{ width: '1050px' }}>
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
                      {
                        Array.from({ length: rowNumbers.pgExp })
                          .map((_, index) => (
                            <PGRows key={index} />
                          )
                          )
                      }
                    </tbody>
                  </table>
                  <div className="my-2 d-flex justify-content-end">
                    <button className="btn btn-success" value={"pgExp"} onClick={addRow} >Add Row</button>
                  </div>
                </div>

                <div className="my-4 px-3">
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
                      {
                        Array.from({ length: rowNumbers.supExp })
                          .map((_, index) => (
                            <SupRows key={index} />
                          )
                          )
                      }
                    </tbody>
                  </table>
                  <div className="my-2 d-flex justify-content-end">
                    <button className="btn btn-success" value={"supExp"} onClick={addRow} >Add Row</button>
                  </div>
                </div>
              </div>


              <div className="my-4 px-3">
                <h5>6. Research Papers/ Publication etc. (Additional pages may be appended)</h5>
                <table style={{ width: '1050px' }}>
                  <thead>
                    <tr>
                      <th>Subject/ Title of the Research Paper</th>
                      <th>Published in (Name, year and edition of the Journal, etc.)</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Array.from({ length: rowNumbers.rpExp })
                        .map((_, index) => (
                          <RPRows key={index} />
                        )
                        )
                    }
                  </tbody>
                </table>
                <div className="my-2 d-flex justify-content-end">
                  <button className="btn btn-success" value={"rpExp"} onClick={addRow} >Add Row</button>
                </div>
              </div>

              <div>
                <h5>7. Declaration</h5>

                <input type="checkbox" onClick={checkReady} />
                <span> I, hereby declare that all the statements/particulars made/furnished in this application are true, complete and correct to the best of my knowledge and belief. I also declare and fully understand that in the event of any information furnished being found false or incorrect at any stage, my application/candidature is liable to be summarily rejected and if I am already appointed,  my services are liable to be terminated without any notice from the post.</span>

              </div>

              <div className="my-4">
                <button className="btn btn-success" onClick={handleSubmit} disabled={!isReady} >Save&Next</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Application;