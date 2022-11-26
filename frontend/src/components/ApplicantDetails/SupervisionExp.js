const SupervisionExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.year}</td>
            <td>{experience.number_DS}</td>
            <td>{experience.number_MTC}</td>
            <td>{experience.remarks}</td>
        </tr>
    )
}

export default SupervisionExp;