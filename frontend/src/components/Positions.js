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
        <div className="container" id="positions">
            <h3 className="text-center my-2">FACULTY APPOINTMENT</h3>
            <p>
                Assam Institute of Management, a premium management institute of the NE Region offering Two
                Year Full Time MBA Programme, AICTE <i>(Govt. of India)</i>, approved and affiliated to ASTÜ <i>(Government
                of Assam)</i>, is looking for filling up faculty positions at the level of Assistant Professors in the areas of
                Finance and Operations Management. Interested candidates should apply online in the prescribed
                format given in the institute website nurtured above within three weeks of publication of this
                advertisement.
            </p>
            <p className="d-flex flex-column">
                <strong>Assam Institute of Management<i>(A Government of Assam Society)</i></strong>
                <strong>Bigyan Path, Paschim Boragaon,</strong>
                <strong>Guwahati - 781035. Assam</strong>
                <strong>Email: mail@aimguwahati.edu.in</strong>
                <strong>Website: <a href="https://aimguwahati.edu.in/">www.aimguwahati.edu.in</a></strong>
            </p>
            <p>
                <strong>Minimum Qualifications</strong> <i>(as per AICTE Guidelines for Assistant Professor Level- 10, Entry Pay Rs. 57,700 -)</i><strong>are as follows</strong>:
            </p>
            <div>
                <strong>Management:</strong>
                <p>
                    Bachelor's Degree in any discipline and Master's Degree in Business Administration / PGDM /
                    C. A. / ICWA/ M. Com. with First Class or equivalent and two years of professional experience after
                    acquiring the degree of Master's degree.
                </p>
            </div>
            <div>
                <strong>
                    Candidates with the following added qualifications/attainments will be given preference:
                </strong>
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
                    <label htmlFor="position"><strong>Area(s) of Preference<i>(Enter a comma-separated list)</i></strong></label>
                    <input type="text" className="form-control" id="position" required />
                    <button className="btn btn-primary my-4" style={{ width: '160px' }} onClick={apply} >Apply</button>
                </form>
            </div>
        </div>
    )
}

export default Positions;