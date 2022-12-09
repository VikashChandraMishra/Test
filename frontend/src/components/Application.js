import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AcadRows from "./ApplicationComponentRows/AcadRows";
import PGRows from "./ApplicationComponentRows/PGRows";
import ProRows from "./ApplicationComponentRows/ProRows";
import RPRows from "./ApplicationComponentRows/RPRows";
import SupRows from "./ApplicationComponentRows/SupRows";
import UGRows from "./ApplicationComponentRows/UGRows";

const Application = () => {

  const navigate = useNavigate(null);
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [rowNumbers, setRowNumbers] = useState({ "acadExp": 1, "proExp": 1, "ugExp": 1, "pgExp": 1, "supExp": 1, "rpExp": 1 })

  const checkReady = () => {
    if (isReady === false) setIsReady(true);
    else if (isReady === true) setIsReady(false);
  }

  const copyAddress = () => {
    if (isSameAddress === false) {
      setIsSameAddress(true);
      document.getElementById('p_address').value = document.getElementById('c_address').value;
      document.getElementById('p_pin').value = document.getElementById('c_pin').value;
      document.getElementById('p_district').value = document.getElementById('c_district').value;
      document.getElementById('p_state').value = document.getElementById('c_state').value;
    }
    else if (isSameAddress === true) {
      setIsSameAddress(false);
      document.getElementById('p_address').value = '';
      document.getElementById('p_pin').value = 0;
      document.getElementById('p_district').value = '';
      document.getElementById('p_state').value = '';
    }
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

  const deleteRow = (e) => {
    e.preventDefault();
    let currentNumber = 0;
    if (e.target.value === "rpExp") {
      currentNumber = rowNumbers.rpExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        rpExp: currentNumber
      });
    } else if (e.target.value === "proExp") {
      currentNumber = rowNumbers.proExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        proExp: currentNumber
      });
    } else if (e.target.value === "ugExp") {
      currentNumber = rowNumbers.ugExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        ugExp: currentNumber
      });
    } else if (e.target.value === "pgExp") {
      currentNumber = rowNumbers.pgExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        pgExp: currentNumber
      });
    } else if (e.target.value === "supExp") {
      currentNumber = rowNumbers.supExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        supExp: currentNumber
      });
    } if (e.target.value === "acadExp") {
      currentNumber = rowNumbers.acadExp;
      if (currentNumber > 1) currentNumber -= 1;
      setRowNumbers({
        ...rowNumbers,
        acadExp: currentNumber
      });
    }

  }

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      document.getElementById('check').checked = false;
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:5000/api/applicant/saved-form-data', {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
            'authToken': localStorage.getItem('authToken'),
            'position': location.state.position
          },

        })

        const json = await response.json();

        if (json.success && json.applicant) {
          document.getElementById('name').value = json.applicant.firstname + ' ' + json.applicant.middlename + ' ' + json.applicant.lastname;
          document.getElementById('dob').value = json.applicant.dob;
          document.getElementById('email').value = json.applicant.email;
          document.getElementById('mobile').value = json.applicant.mobile;
          document.getElementById('position').value = location.state.position;

          if (json.application) {
            let application = json.application;
            setRowNumbers({ "acadExp": application.academic_experience.length, "proExp": application.industry_experience.length, "ugExp": application.ug_teaching_experience.length, "pgExp": application.pg_teaching_experience.length, "supExp": application.supervision_experience.length, "rpExp": application.research_papers.length });
            let c_address = document.getElementById('c_address');
            let c_pin = document.getElementById('c_pin');
            let c_district = document.getElementById('c_district');
            let c_state = document.getElementById('c_state');
            let p_address = document.getElementById('p_address');
            let p_pin = document.getElementById('p_pin');
            let p_district = document.getElementById('p_district');
            let p_state = document.getElementById('p_state');

            c_address.value = application.general_information.correspondence_address.address;
            c_pin.value = application.general_information.correspondence_address.pin;
            c_district.value = application.general_information.correspondence_address.district;
            c_state.value = application.general_information.correspondence_address.state;
            p_address.value = application.general_information.permanent_address.address;
            p_pin.value = application.general_information.permanent_address.pin;
            p_district.value = application.general_information.permanent_address.district;
            p_state.value = application.general_information.permanent_address.state;

            let eduDetails = document.getElementsByClassName('edu-details');
            let eduGrade = document.getElementsByClassName('edu-grade');
            let eduSubjects = document.getElementsByClassName('edu-subjects');
            let eduRemarks = document.getElementsByClassName('edu-remarks');

            for (let i = 0; i < application.educational_qualification.length; i++) {
              eduDetails[i].value = application.educational_qualification[i].details;
              eduGrade[i].value = application.educational_qualification[i].grade;
              eduSubjects[i].value = application.educational_qualification[i].subjects;
              eduRemarks[i].value = application.educational_qualification[i].remarks;
            }

            let acadPost = document.getElementsByClassName('acad-post');
            let acadBegin = document.getElementsByClassName('acad-begin');
            let acadEnd = document.getElementsByClassName('acad-end');
            let acadOrganization = document.getElementsByClassName('acad-organization');
            let acadDutyDesc = document.getElementsByClassName('acad-duty-desc');
            let acadSpecDuty = document.getElementsByClassName('acad-duty-spec');
            let acadExp = document.getElementsByClassName('acad-exp');
            let acadRemarks = document.getElementsByClassName('acad-remarks');

            for (let i = 0; i < application.academic_experience.length; i++) {
              acadPost[i].value = application.academic_experience[i].post;
              acadBegin[i].value = application.academic_experience[i].begin_date;
              acadEnd[i].value = application.academic_experience[i].end_date;
              acadOrganization[i].value = application.academic_experience[i].organization;
              acadDutyDesc[i].value = application.academic_experience[i].duty;
              acadSpecDuty[i].value = application.academic_experience[i].special_duty;
              acadExp[i].value = application.academic_experience[i].experience;
              acadRemarks[i].value = application.academic_experience[i].remarks;
            }

            let proPost = document.getElementsByClassName('pro-post');
            let proOrganization = document.getElementsByClassName('pro-organization');
            let proBegin = document.getElementsByClassName('pro-begin');
            let proEnd = document.getElementsByClassName('pro-end');
            let proExp = document.getElementsByClassName('pro-exp');
            let proRemarks = document.getElementsByClassName('pro-remarks');

            for (let i = 0; i < application.industry_experience.length; i++) {
              proPost[i].value = application.industry_experience[i].post;
              proBegin[i].value = application.industry_experience[i].begin_date;
              proEnd[i].value = application.industry_experience[i].end_date;
              proOrganization[i].value = application.industry_experience[i].organization;
              proExp[i].value = application.industry_experience[i].experience;
              proRemarks[i].value = application.industry_experience[i].remarks;
            }

            let ugYear = document.getElementsByClassName('ug-year');
            let ugCourse = document.getElementsByClassName('ug-course');
            let ugSubjects = document.getElementsByClassName('ug-subjects');
            let ugRemarks = document.getElementsByClassName('ug-remarks');

            for (let i = 0; i < application.ug_teaching_experience.length; i++) {
              ugYear[i].value = application.ug_teaching_experience[i].year;
              ugCourse[i].value = application.ug_teaching_experience[i].course;
              ugSubjects[i].value = application.ug_teaching_experience[i].subjects;
              ugRemarks[i].value = application.ug_teaching_experience[i].remarks;
            }

            let pgYear = document.getElementsByClassName('pg-year');
            let pgCourse = document.getElementsByClassName('pg-course');
            let pgSubjects = document.getElementsByClassName('pg-subjects');
            let pgDegree = document.getElementsByClassName('pg-degree');
            let pgRemarks = document.getElementsByClassName('pg-remarks');

            for (let i = 0; i < application.pg_teaching_experience.length; i++) {
              pgYear[i].value = application.pg_teaching_experience[i].year;
              pgCourse[i].value = application.pg_teaching_experience[i].course;
              pgSubjects[i].value = application.pg_teaching_experience[i].subjects;
              pgDegree[i].value = application.pg_teaching_experience[i].degree;
              pgRemarks[i].value = application.pg_teaching_experience[i].remarks;
            }

            let ssYear = document.getElementsByClassName('ss-year');
            let ss_num_ds = document.getElementsByClassName('ss-num-ds');
            let ss_num_mtc = document.getElementsByClassName('ss-num-mtc');
            let ssRemarks = document.getElementsByClassName('ss-remarks');

            for (let i = 0; i < application.supervision_experience.length; i++) {
              ssYear[i].value = application.supervision_experience[i].year;
              ss_num_ds[i].value = application.supervision_experience[i].number_DS;
              ss_num_mtc[i].value = application.supervision_experience[i].number_MTC;
              ssRemarks[i].value = application.supervision_experience[i].remarks;
            }

            let rpTitle = document.getElementsByClassName('rp-title');
            let rpDetails = document.getElementsByClassName('rp-details');
            let rpRemarks = document.getElementsByClassName('rp-remarks');

            for (let i = 0; i < application.research_papers.length; i++) {
              rpTitle[i].value = application.research_papers[i].title;
              rpDetails[i].value = application.research_papers[i].details;
              rpRemarks[i].value = application.research_papers[i].remarks;
            }
          }

        }
        else navigate('/');

      }

      fetchData();
    } else navigate('/');
    // eslint-disable-next-line
  }, [])


  const errorAlert = (name) => { alert(`All ${name} fields are mandatory`); }

  const handleSave = async (e) => {
    e.preventDefault();

    let position = document.getElementById('position').value;
    let correspondence_address = { "address": document.getElementById('c_address').value, "pin": document.getElementById('c_pin').value, "district": document.getElementById('c_district').value, "state": document.getElementById('c_state').value };
    let permanent_address = { "address": document.getElementById('p_address').value, "pin": document.getElementById('p_pin').value, "district": document.getElementById('p_district').value, "state": document.getElementById('p_state').value };

    if (!position || !correspondence_address.address || !correspondence_address.pin || !correspondence_address.district || !correspondence_address.state || !permanent_address.address || !permanent_address.pin || !permanent_address.district || !permanent_address.state) { errorAlert('general information'); return; }

    let eduDegree = document.getElementsByClassName('edu-degree');
    let eduDetails = document.getElementsByClassName('edu-details');
    let eduGrade = document.getElementsByClassName('edu-grade');
    let eduSubjects = document.getElementsByClassName('edu-subjects');
    let eduRemarks = document.getElementsByClassName('edu-remarks');
    let educational_qualification = [];

    for (let i = 0; i < 6; i++) {
      educational_qualification.push({ degree: eduDegree[i].innerText, details: eduDetails[i].value, grade: eduGrade[i].value, subjects: eduSubjects[i].value, remarks: eduRemarks[i].value })
    }

    let acadPost = document.getElementsByClassName('acad-post');
    let acadBegin = document.getElementsByClassName('acad-begin');
    let acadEnd = document.getElementsByClassName('acad-end');
    let acadOrganization = document.getElementsByClassName('acad-organization');
    let acadDutyDesc = document.getElementsByClassName('acad-duty-desc');
    let acadSpecDuty = document.getElementsByClassName('acad-duty-spec');
    let acadExp = document.getElementsByClassName('acad-exp');
    let acadRemarks = document.getElementsByClassName('acad-remarks');
    let academic_experience = [];

    for (let i = 0; i < rowNumbers.acadExp; i++) {
      academic_experience.push({ post: acadPost[i].value, organization: acadOrganization[i].value, begin_date: acadBegin[i].value, end_date: acadEnd[i].value, duty: acadDutyDesc[i].value, special_duty: acadSpecDuty[i].value, experience: acadExp[i].value, remarks: acadRemarks[i].value, })
    }

    let proPost = document.getElementsByClassName('pro-post');
    let proOrganization = document.getElementsByClassName('pro-organization');
    let proBegin = document.getElementsByClassName('pro-begin');
    let proEnd = document.getElementsByClassName('pro-end');
    let proExp = document.getElementsByClassName('pro-exp');
    let proRemarks = document.getElementsByClassName('pro-remarks');
    let industry_experience = [];

    for (let i = 0; i < rowNumbers.proExp; i++) {
      industry_experience.push({ post: proPost[i].value, organization: proOrganization[i].value, begin_date: proBegin[i].value, end_date: proEnd[i].value, experience: proExp[i].value, remarks: proRemarks[i].value, })
    }

    let ugYear = document.getElementsByClassName('ug-year');
    let ugCourse = document.getElementsByClassName('ug-course');
    let ugSubjects = document.getElementsByClassName('ug-subjects');
    let ugRemarks = document.getElementsByClassName('ug-remarks');
    let ug_teaching_experience = [];

    for (let i = 0; i < rowNumbers.ugExp; i++) {
      ug_teaching_experience.push({ year: ugYear[i].value, course: ugCourse[i].value, subjects: ugSubjects[i].value, remarks: ugRemarks[i].value, })
    }

    let pgYear = document.getElementsByClassName('pg-year');
    let pgCourse = document.getElementsByClassName('pg-course');
    let pgSubjects = document.getElementsByClassName('pg-subjects');
    let pgDegree = document.getElementsByClassName('pg-degree');
    let pgRemarks = document.getElementsByClassName('pg-remarks');
    let pg_teaching_experience = [];

    for (let i = 0; i < rowNumbers.pgExp; i++) {
      pg_teaching_experience.push({ year: pgYear[i].value, course: pgCourse[i].value, subjects: pgSubjects[i].value, degree: pgDegree[i].value, remarks: pgRemarks[i].value, })
    }

    let ssYear = document.getElementsByClassName('ss-year');
    let ss_num_ds = document.getElementsByClassName('ss-num-ds');
    let ss_num_mtc = document.getElementsByClassName('ss-num-mtc');
    let ssRemarks = document.getElementsByClassName('ss-remarks');
    let supervision_experience = [];

    for (let i = 0; i < rowNumbers.supExp; i++) {
      supervision_experience.push({ year: ssYear[i].value, number_DS: ss_num_ds[i].value, number_MTC: ss_num_mtc[i].value, remarks: ssRemarks[i].value, })
    }

    let rpTitle = document.getElementsByClassName('rp-title');
    let rpDetails = document.getElementsByClassName('rp-details');
    let rpRemarks = document.getElementsByClassName('rp-remarks');
    let research_papers = [];

    for (let i = 0; i < rowNumbers.rpExp; i++) {
      research_papers.push({ title: rpTitle[i].value, details: rpDetails[i].value, remarks: rpRemarks[i].value, })
    }


    const response = await fetch('http://127.0.0.1:5000/api/applicant/save-form', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'authToken': localStorage.getItem('authToken'),
      },

      body: JSON.stringify({ position, correspondence_address, permanent_address, educational_qualification, academic_experience, industry_experience, ug_teaching_experience, pg_teaching_experience, supervision_experience, research_papers })
    })

    const json = await response.json();

    if (json.success === true && json.message === 'application successfully saved') {
      alert("Progress Saved!");
      navigate('/professor-apply', { state: { position: location.state.position, application_id: json.id } });
    }
    else alert("Some error ocurred. Please try again later.");

  }

  const next = () => {
    navigate('/upload', { state: { application_id: location.state.application_id } });
  }

  return (
    <div>
      <div className="col container my-4" style={{ minWidth: '300px' }}>
        <div className="card mx-auto">
          <p className="card-header">Application</p>
          <div className="card-body">
            <form className="form bg-light py-1 px-1" encType="multipart/form-data">
              <div className="my-4">
                <h5>1. General Information</h5>
                <div className="row py-2">
                  <div className="col form-group">
                    <label><strong>Name of the Applicant</strong></label>
                    <input type="text" className="form-control" id="name" disabled />
                  </div>

                  <div className="col form-group">
                    <label><strong>Date of Birth</strong></label>
                    <input type="date" className="form-control" id="dob" disabled />
                  </div>

                  <div className="col form-group">
                    <label><strong>Mobile Number</strong></label>
                    <input type="number" className="form-control" id="mobile" disabled />
                  </div>
                </div>

                <div className="row py-2">
                  <div className="col form-group">
                    <label><strong>Email</strong></label>
                    <input type="email" className="form-control" id="email" disabled />
                  </div>

                  <div className="col form-group">
                    <label><strong>Area of Preference</strong></label>
                    <input className="form-control" type="text" id="position" disabled />
                  </div>
                </div>

                <div className="row py-2">
                  <div className="col form-group">
                    <strong>Correspondence Address</strong>
                    <div className="row my-2">
                      <div className="col d-flex flex-column justify-content-start">
                        <label className="py-2">Address</label>
                        <label className="py-2">Pin Code</label>
                        <label className="py-2">District</label>
                        <label className="py-2">State</label>
                      </div>
                      <div className="col d-flex flex-column justify-content-end">
                        <input type="text" className="form-control" id="c_address" />
                        <input type="number" className="form-control" id="c_pin" />
                        <input type="text" className="form-control" id="c_district" />
                        <input type="text" className="form-control" id="c_state" />
                      </div>
                    </div>
                  </div>

                  <div className="col form-group">
                    <strong>Permanent Address </strong>
                    <input type="checkbox" onClick={copyAddress} />
                    <span> (Same as correspondence address)</span>
                    <div className="row my-2">
                      <div className="col d-flex flex-column justify-content-start">
                        <label className="py-2">Address</label>
                        <label className="py-2">Pin Code</label>
                        <label className="py-2">District</label>
                        <label className="py-2">State</label>
                      </div>
                      <div className="col d-flex flex-column justify-content-end">
                        <input type="text" className="form-control" id="p_address" />
                        <input type="number" className="form-control" id="p_pin" />
                        <input type="text" className="form-control" id="p_district" />
                        <input type="text" className="form-control" id="p_state" />
                      </div>
                    </div>
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
                      <th>Post</th>
                      <th>Organization</th>
                      <th>Joining Date</th>
                      <th>Leaving Date</th>
                      <th>Description of duties</th>
                      <th>Special nature of assignment, if any and key actions taken</th>
                      <th>Experience in years, months and days</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Array.from({ length: rowNumbers.acadExp })
                        .map((_, index) => (
                          <AcadRows key={index} rows={rowNumbers.acadExp} />
                        )
                        )
                    }
                  </tbody>
                </table>
                <div className="my-2 d-flex justify-content-between">
                  <button className="btn btn-success" value={"acadExp"} onClick={deleteRow} >Delete Row</button>
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
                      <th rowSpan={2}>Experience in years, months and days</th>
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
                          <ProRows key={index} rows={rowNumbers.proExp} />
                        )
                        )
                    }
                  </tbody>
                </table>
                <div className="my-2 d-flex justify-content-between">
                  <button className="btn btn-success" value={"proExp"} onClick={deleteRow} >Delete Row</button>
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
                  <div className="my-2 d-flex justify-content-between">
                    <button className="btn btn-success" value={"ugExp"} onClick={addRow} >Delete Row</button>
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
                  <div className="my-2 d-flex justify-content-between">
                    <button className="btn btn-success" value={"pgExp"} onClick={deleteRow} >Delete Row</button>
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
                  <div className="my-2 d-flex justify-content-between">
                    <button className="btn btn-success" value={"supExp"} onClick={deleteRow} >Delete Row</button>
                    <button className="btn btn-success" value={"supExp"} onClick={addRow} >Add Row</button>
                  </div>
                </div>
              </div>


              <div className="my-4">
                <h5>6. Research Papers/ Publication etc. (Additional pages may be appended)</h5>
                <table style={{ width: '1072px' }}>
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
                <div className="my-2 d-flex justify-content-between">
                  <button className="btn btn-success" value={"rpExp"} onClick={deleteRow} >Delete Row</button>
                  <button className="btn btn-success" value={"rpExp"} onClick={addRow} >Add Row</button>
                </div>
              </div>

              <div>
                <input type="checkbox" onClick={checkReady} id="check" />
                <strong> Ready to save and proceed?</strong>
              </div>

              <div className="my-4 d-flex justify-content-between">
                <button className="btn btn-primary" onClick={handleSave} disabled={!isReady} style={{ width: '150px' }} >Save</button>
                <button className="btn btn-success" onClick={next} disabled={!isReady} style={{ width: '150px' }} >Next</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Application;