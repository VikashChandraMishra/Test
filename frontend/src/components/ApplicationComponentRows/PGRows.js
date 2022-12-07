const PGRows = () => {
    return (
        <tr>
            <td>
                <input type="text" className="form-control pg-year" />
            </td>
            <td>
                <input type="text" className="form-control pg-course" />
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
    )
}

export default PGRows;