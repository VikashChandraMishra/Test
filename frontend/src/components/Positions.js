import { useNavigate } from "react-router-dom";

const Positions = () => {

    const navigate = useNavigate(null);

    const apply = () => {
        let position = document.getElementById('position').value;
        if (!position) {
            alert("Enter area of preference");
            return;
        }
        navigate('/professor-apply', { state: { "position": position } });
    }

    return (
        <div className="container">
            <h3 className="text-center my-2">FACULTY APPOINTMENT</h3>
            <p className="d-flex flex-column">
                <span>Assam Institute of Management(A Government of Assam Society)</span>
                <span>Bigyan Path, Paschim Boragaon,</span>
                <span>Guwahati - 781035. Assam</span>
                <span>Email: mail@aimguwahati.edu.in</span>
                <span>Website: <a href="www.aimguwahati.edu.in">www.aimguwahati.edu.in</a></span>
            </p>
            <p>
                Assam Institute of Management, a premium management institute of the NE Region offering Two
                Year Full Time MBA Programme, AICTE (Govt. of India) approved and affiliated to ASTÜ Government
                of Assam), is looking for filling up faculty positions at the level of Assistant Professors in the areas of
                Finance and Operations Management. Interested candidates should apply online in the prescribed
                format given in the institute website nurtured above within three weeks of publication of this
                advertisement.
            </p>
            <p>
                Minimum Qualifications as per AICTE Guidelines for Assistant Professor Level- 10, Entry Pay Rs. 57,700 -) are as follows:
            </p>
            <div>
                <span>Management:</span>
                <p>
                    Bachelor's Degree in any discipline and Master's Degree in Business Administration / PGDM /
                    C. A. / ICWA/ M. Com. with First Class or equivalent and two years of professional experience after
                    acquiring the degree of Master's degree.
                </p>
            </div>
            <div>
                Candidates with the following added qualifications/attainments will be given preference:
                <div className="d-flex flex-column">
                    <span>
                        1) Uniformly good academic career with adequate Engineering/Science and Maths
                        background.
                    </span>
                    <span>
                        2) Adequate Research Work and Publications.
                    </span>
                    <span>
                        3) Corporate and Field Exposure.
                    </span>
                    <span>
                        4) Candidate with specialised skillsets in the field of operations and production, IT Skills and
                        exposure to the use and application of specialised financial/operation software.
                    </span>
                </div>
            </div>
            <div className="d-flex flex-column py-4">
                <form className="form">
                    <label htmlFor="position"><strong>Area of Preference</strong></label>
                    <input type="text" className="form-control" id="position" required />
                    <button className="btn btn-primary my-4" style={{ width: '160px' }} onClick={apply} >Apply</button>
                </form>
            </div>
            {/* 
            <div className="row mx-4">
                <h5><strong>Application Status:</strong></h5>
                <div className="row bg-dark text-white text-center py-1 d-flex justify-content-between align-items-center">
                    <strong className="col-1">Position</strong>
                    <strong className="col-1">Post-Code</strong>
                    <strong className="col-1">Age(years)</strong>
                    <strong className="col-1">Level</strong>
                    <strong className="col-1">Group</strong>
                    <strong className="col-1">No. of vacancies</strong>
                    <strong className="col-1">Reservation Category</strong>
                    <strong className="col-1">Qualification</strong>
                    <strong className="col-1">Experience</strong>
                    <strong className="col-1">Apply</strong>
                </div>
                <div className="row text-center py-1 border d-flex justify-content-between align-items-center">
                    <div className="col-1">Asst. Professor</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">30-40</div>
                    <div className="col-1">State</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">1</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">Post-Graduate</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">
                        <button className="btn btn-success" onClick={apply} >Apply</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Positions;