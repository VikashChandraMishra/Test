import { useNavigate } from "react-router-dom";

const ApplicationData = (props) => {
    
    const navigate = useNavigate(null);

    const { application } = props;
    const { _id, applicant, status, uploaded } = application;


    const handleClick = (e) => {
        navigate('/admin/fetch-application', {state: {_id: e.target.innerText}});
    }

    return (
        <tr>
            <td onClick={handleClick} style={{cursor: 'pointer'}} >{_id}</td>
            <td>{applicant}</td>
            <td>{status}</td>
            <td>{status !== 'saved' ? 'Yes' : 'No'}</td>
            <td>{(new Date(uploaded).toGMTString())}</td>
        </tr>
    )
}

export default ApplicationData;