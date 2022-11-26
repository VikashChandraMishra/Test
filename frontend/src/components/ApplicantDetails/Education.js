const Education = (props) => {

    const { education } = props;

    return (
        <tr>
            <td>{education.degree}</td>
            <td>{education.details}</td>
            <td>{education.grade}</td>
            <td>{education.subjects}</td>
            <td>{education.remarks}</td>
        </tr>
    )
}

export default Education;