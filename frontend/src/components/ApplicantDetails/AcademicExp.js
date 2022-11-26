const AcademicExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.post}</td>
            <td>{experience.organization}</td>
            <td>{experience.duty}</td>
            <td>{experience.special_duty}</td>
            <td>{experience.experience}</td>
            <td>{experience.remarks}</td>
        </tr>
    )
}

export default AcademicExp;