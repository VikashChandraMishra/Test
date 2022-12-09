const EduRows = (props) => {

    const {degree} = props;

    return (
        <tr>
            <td className="form-control edu-degree" >{degree}</td>
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

    )
}

export default EduRows;