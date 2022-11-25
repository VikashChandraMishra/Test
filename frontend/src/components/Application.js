const Application = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = document.getElementById('name');
    let dob = document.getElementById('dob');
    let email = document.getElementById('email');
    let correspondence_address = document.getElementById('correspondence_address');
    let permanent_address = document.getElementById('permanent_address');
    let mobile = document.getElementById('mobile');


    let eduDegree = document.getElementsByClassName('edu-degree');
    let eduDetails = document.getElementsByClassName('edu-details');
    let eduGrade = document.getElementsByClassName('edu-grade');
    let eduSubjects = document.getElementsByClassName('edu-subjects');
    let eduRemarks = document.getElementsByClassName('edu-remarks');

    let acadPost = document.getElementsByClassName('acad-post');
    let acadOrganization = document.getElementsByClassName('acad-organization');
    let acadDutyDesc = document.getElementsByClassName('acad-duty-desc');
    let acadSpecDuty = document.getElementsByClassName('acad-spec-duty');
    let acadExp = document.getElementsByClassName('acad-exp');
    let acadRemarks = document.getElementsByClassName('acad-remarks');

    let proPost = document.getElementsByClassName('pro-post');
    let proOrganization = document.getElementsByClassName('pro-organization');
    let proBegin = document.getElementsByClassName('pro-begin');
    let proEnd = document.getElementsByClassName('pro-end');
    let proExp = document.getElementsByClassName('pro-exp');
    let proRemarks = document.getElementsByClassName('pro-remarks');

    let ugYear = document.getElementsByClassName('ug-year');
    let ugTitle = document.getElementsByClassName('ug-title');
    let ugSubjects = document.getElementsByClassName('ug-subjects');
    let ugRemarks = document.getElementsByClassName('ug-remarks');

    let pgYear = document.getElementsByClassName('pg-year');
    let pgTitle = document.getElementsByClassName('pg-title');
    let pgSubjects = document.getElementsByClassName('pg-subjects');
    let pgdegree = document.getElementsByClassName('pg-degree');
    let pgRemarks = document.getElementsByClassName('pg-remarks');

    let ssYear = document.getElementsByClassName('ss-year');
    let ss_num_ds = document.getElementsByClassName('ss-num-ds');
    let ss_num_mtc = document.getElementsByClassName('ss-num-mtc');
    let ssRemarks = document.getElementsByClassName('ss-remarks');

    
    let rpTitle = document.getElementsByClassName('rp-title');
    let rpDetails = document.getElementsByClassName('rp-details');
    let rpRemarks = document.getElementsByClassName('rp-remarks');

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
                    <input type="number" className="form-control" id="mobile" required />
                  </div>
                </div>

              </div>

              <div className="my-4">
                <h5>2. Educational Qualification</h5>

                <table>
                  <thead>
                    <tr>
                      <th>Sl.No.</th>
                      <th>Qualification</th>
                      <th>Year/University/Institute/Board</th>
                      <th>Percentage/Grade</th>
                      <th>Subject(s)/Specialization</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>i.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="Ph.D" disabled />
                      </td>
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
                      <td>ii.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="Post Graduation, MBA" disabled />
                      </td>
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
                      <td>iii.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="Graduation" disabled />
                      </td>
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
                      <td>iv.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="Higher Secondary(H.S.) Pre Degree Science" disabled />
                      </td>
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
                      <td>v.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="H.S.L.C." disabled />
                      </td>
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
                      <td>vi.</td>
                      <td>
                        <input type="text" className="form-control edu-degree" value="NET/SLET" disabled />
                      </td>
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
                    <tr>
                      <td>
                        <input type="text" className="form-control acad-post" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-organization" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-desc" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-spec" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-exp" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" className="form-control acad-post" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-organization" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-desc" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-spec" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-exp" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" className="form-control acad-post" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-organization" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-desc" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-duty-spec" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-exp" />
                      </td>
                      <td>
                        <input type="text" className="form-control acad-remarks" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-4">
                <h5>4. Professional/ Industry Experience <i>(On full time basis)</i></h5>

                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>Sl.No.</th>
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
                    <tr>
                      <td>
                        i.
                      </td>
                      <td>
                        <input type="text" className="form-control pro-post" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-organization" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-begin" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-end" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-exp" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        ii.
                      </td>
                      <td>
                        <input type="text" className="form-control pro-post" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-organization" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-begin" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-end" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-exp" />
                      </td>
                      <td>
                        <input type="text" className="form-control pro-remarks" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-4">
                <h5>5. Teaching Experience <i>(Please list courses taught at different levels)</i></h5>

                <div className="my-4">
                  <h5>A. Undergraduate Level</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Year</th>
                        <th>Title of the course/ number of students</th>
                        <th>Core or Elective</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          i.
                        </td>
                        <td>
                          <input type="text" className="form-control ug-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-title" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-subjects" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-remarks" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ii.
                        </td>
                        <td>
                          <input type="text" className="form-control ug-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-title" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-subjects" />
                        </td>
                        <td>
                          <input type="text" className="form-control ug-remarks" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="my-4">
                  <h5>B. Postgraduate Level</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Year</th>
                        <th>Title of the course/ number of students</th>
                        <th>PGP/M.Phil/Ph.D/FPM/other</th>
                        <th>Core or Elective</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          i.
                        </td>
                        <td>
                          <input type="text" className="form-control pg-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-title" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-degree" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-subjects" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-remarks" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ii.
                        </td>
                        <td>
                          <input type="text" className="form-control pg-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-title" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-degree" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-subjects" />
                        </td>
                        <td>
                          <input type="text" className="form-control pg-remarks" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="my-4">
                  <h5>C. Students Supervised for M.Phil/ Ph.D or FPM Programme</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Year</th>
                        <th>Number of students who have completed their dissertations - Direct Supervisor</th>
                        <th>Number of students who have completed their dissertations - Member of Thesis Commitee</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          i.
                        </td>
                        <td>
                          <input type="text" className="form-control ss-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-num-ds" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-num-mtc" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-remarks" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ii.
                        </td>
                        <td>
                          <input type="text" className="form-control ss-year" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-num-ds" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-num-mtc" />
                        </td>
                        <td>
                          <input type="text" className="form-control ss-remarks" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div className="my-4">
                <h5>6. Research Papers/ Publication etc. (Additional pages may be appended)</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Sl.No.</th>
                      <th>Subject/ Title of the Research Paper</th>
                      <th>Published in (Name, year and edition of the Journal, etc.)</th>
                      <th style={{ width: '330px' }}>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        i.
                      </td>
                      <td>
                        <input type="text" className="form-control rp-title" />
                      </td>
                      <td>
                        <input type="text" className="form-control rp-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control rp-remarks" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        ii.
                      </td>
                      <td>
                        <input type="text" className="form-control rp-title" />
                      </td>
                      <td>
                        <input type="text" className="form-control rp-details" />
                      </td>
                      <td>
                        <input type="text" className="form-control rp-remarks" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h5>7. Declaration</h5>

                <input type="checkbox" id="declaration" />
                <span> I, hereby declare that all the statements/particulars made/furnished in this application are true, complete and correct to the best of my knowledge and belief. I also declare and fully understand that in the event of any information furnished being found false or incorrect at any stage, my application/candidature is liable to be summarily rejected and if I am already appointed,  my services are liable to be terminated without any notice from the post.</span>

              </div>

              <div className="row">
                <div className="col-5 mx-4 px-4">
                  <label htmlFor="files" className="form-label">Photo</label>
                  <input type="file" className="form-control data-input" id="photo" name="photo" required />
                </div>
                <div className="col-5 mx-4 px-4">
                  <label htmlFor="files" className="form-label">Signature</label>
                  <input type="file" className="form-control data-input" id="signature" name="signature" required />
                </div>
              </div>

              <div className="my-4">
                <button className="btn btn-success" onClick={handleSubmit} >Submit</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Application;