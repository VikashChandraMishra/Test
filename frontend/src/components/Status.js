import { useNavigate } from "react-router-dom";

const Status = (props) => {

    const { application } = props;

    const { _id, position } = application;

    const navigate = useNavigate(null);

    const printPDF = () => {
        navigate('/printPDF', { state: { _id: _id } });
    }

    return (
        <div className="row text-center py-1 border">
            {console.log("_id")}
            <div className="col-2">{_id ? _id : 'NA'}</div>
            <div className="col-3">{position ? position : 'NA'}</div>
            <div className="col-3">{_id ? 'Submitted' : 'NA'}</div>
            <div className="col-3">{_id ? 'Application Submitted Successfully' : 'NA'}</div>
            <div className="col-1">{
                <button className="btn btn-success" disabled={!_id} onClick={printPDF}>Print</button>
            }</div>
        </div>
    )
}

export default Status;