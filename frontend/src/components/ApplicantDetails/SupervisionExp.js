const SupervisionExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.year ?experience.year:'NIL'}</td>
            <td>{experience.number_DS ?experience.number_DS:'NIL'}</td>
            <td>{experience.number_MTC ?experience.number_MTC:'NIL'}</td>
            <td>{experience.remarks ?experience.remarks:'NIL'}</td>
        </tr>
    )
}

export default SupervisionExp;