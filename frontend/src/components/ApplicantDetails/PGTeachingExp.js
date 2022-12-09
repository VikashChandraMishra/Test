const PGTeachingExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.year ?experience.year:'NIL'}</td>
            <td>{experience.course ?experience.course:'NIL'}</td>
            <td>{experience.degree ?experience.degree:'NIL'}</td>
            <td>{experience.subjects ?experience.subjects:'NIL'}</td>
            <td>{experience.remarks ?experience.remarks:'NIL'}</td>
        </tr>
    )
}

export default PGTeachingExp;