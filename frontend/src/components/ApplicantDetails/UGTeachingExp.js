const UGTeachingExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.year}</td>
            <td>{experience.course}</td>
            <td>{experience.subjects}</td>
            <td>{experience.remarks}</td>
        </tr>
    )
}

export default UGTeachingExp;