import { useNavigate } from "react-router-dom";

const Positions = () => {

    const navigate = useNavigate(null);

    const apply = (e) => {
        navigate('/apply', {state: {position: e.target.value}})
    }

    return (
        <div>
            <h3 className="text-center my-2">POSITIONS</h3>
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
                    <div className="col-1">Asst. Professor Marketing</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">30-40</div>
                    <div className="col-1">State</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">1</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">Post-Graduate</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">
                        <button className="btn btn-success" value="Asst. Professor Marketing" onClick={apply} >Apply</button>
                    </div>
                </div>
                <div className="row text-center py-1 border d-flex justify-content-between align-items-center">
                    <div className="col-1">Asst. Professor Operations</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">30-40</div>
                    <div className="col-1">State</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">1</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">Post-Graduate</div>
                    <div className="col-1">NA</div>
                    <div className="col-1">
                        <button className="btn btn-success" value="Asst. Professor Operations" onClick={apply} >Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Positions;