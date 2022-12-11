const ApplicationData = (props) => {
    const { application } = props;
    const { _id, applicant, status } = application;

    return (
        <tr>
            <td>{_id}</td>
            <td>{applicant}</td>
            <td>{status}</td>
            <td>{status === 'submitted' ? 'Yes':'No'}</td>
        </tr>
    )
}

export default ApplicationData;