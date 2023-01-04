import { useNavigate } from "react-router-dom";

const Status = (props) => {

    const { application } = props;

    const { _id, position, status } = application;

    const navigate = useNavigate(null);

    const edit = () => {
        navigate('/professor-apply', { state: { "position": position } })
    }

    const printPDF = () => {
        navigate('/printPDF', { state: { _id: _id } });
    }

    return (
        <div className="row text-center py-1 border">
            <div className="col-2">{_id ? _id : 'NA'}</div>
            <div className="col-3">{position ? position : 'NA'}</div>
            <div className="col-3">{_id ? status.toUpperCase() : 'NA'}</div>
            <div className="col-3">{_id ? `Application ${status}` : 'NA'}</div>
            <div className="col-1">
                {
                    status === 'saved' ?
                        <button className="btn btn-success" onClick={edit}>Edit</button>
                        :
                        <button className="btn btn-success" onClick={printPDF}>Print</button>
                }</div>
        </div>
    )
}

export default Status;