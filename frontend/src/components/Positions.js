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
            <div>

                <h4 className="text-center my-2">FACULTY APPOINTMENT</h4>

                <p className="d-flex flex-column text-center">
                    <span>Assam Institute of Management (Estd 1988)</span>
                    <span>(A Government of Assam Society)</span>
                    <span>Bigyan Path, Paschim Boragaon,Guwahati - 781035. Assam</span>
                    <span>Email: mail@aimguwahati.edu.in</span>
                    <span>Website: <a href="https://aimguwahati.edu.in/">www.aimguwahati.edu.in</a></span>
                </p>

                <p>
                    Assam Institute of Management, a premium management institute of the NE Region offering Two Year Full Time MBA Programme (Trimester Based), All India Council of Technical Education (AICTE) Govt. of India, approved and affiliated to Assam Science Technology University (ASTU), Government of Assam, is looking for filling up faculty positions at the level of Assistant Professors in the areas of Finance and Operations Management along with HR Specialization. Interested candidates should apply online in the prescribed format given in the institute website mentioned above within three weeks of publication of this advertisement.
                </p>

                <p>
                    Minimum Qualifications as per AICTE Guidelines dated 01 March 2019 for Assistant Professor in Management (Level- 10, Entry Pay Rs. 57,700/-) are as follows: Bachelor's Degree in any discipline and Master's Degree in Business Administration / PGDM / C. A. / ICWA/ M. Com. with First Class or equivalent and two years of professional experience after acquiring the degree of Master's degree.

                </p>

                <p>
                    Candidates with the following added qualifications / attainments will be given preference
                </p>

                <p className="d-flex flex-column">
                    <span>1) Uniformly good academic career with Engineering / Science / Maths Background.</span>
                    <span>2) Adequate Research Work and Publications.</span>
                    <span>3) Corporate and Field Exposure.</span>
                    <span>4) Candidate with specialised skillsets in the field of operations and production, IT Skills and
                        exposure to the use and application of specialised financial/ operations software.</span>
                </p>

                Note :-  Shortlisted Candidates will be individually intimated for  interview and other proceedings.

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