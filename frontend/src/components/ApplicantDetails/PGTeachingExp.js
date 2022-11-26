const PGTeachingExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.year}</td>
            <td>{experience.course}</td>
            <td>{experience.degree}</td>
            <td>{experience.subjects}</td>
            <td>{experience.remarks}</td>
        </tr>
    )
}

export default PGTeachingExp;