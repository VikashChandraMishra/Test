const ProRows = () => {
    return (
        <tr>
            <td>
                <input type="text" className="form-control pro-post" />
            </td>
            <td>
                <input type="text" className="form-control pro-organization" />
            </td>
            <td>
                <input type="date" className="form-control pro-begin" />
            </td>
            <td>
                <input type="date" className="form-control pro-end" />
            </td>
            <td>
                <input type="text" className="form-control pro-exp" />
            </td>
            <td>
                <input type="text" className="form-control pro-remarks" />
            </td>
        </tr>

    )
}

export default ProRows;