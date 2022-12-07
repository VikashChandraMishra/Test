const AcadRows = () => {
    return (
        <tr>
            <td>
                <input type="text" className="form-control acad-post" />
            </td>
            <td>
                <input type="date" className="form-control acad-begin" />
            </td>
            <td>
                <input type="date" className="form-control acad-end" />
            </td>
            <td>
                <input type="text" className="form-control acad-organization" />
            </td>
            <td>
                <input type="text" className="form-control acad-duty-desc" />
            </td>
            <td>
                <input type="text" className="form-control acad-duty-spec" />
            </td>
            <td>
                <input type="text" className="form-control acad-exp" />
            </td>
            <td>
                <input type="text" className="form-control acad-remarks" />
            </td>
        </tr>
    )
}

export default AcadRows;