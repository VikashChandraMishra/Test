const Education = (props) => {

    const { education } = props;

    return (
        <tr>
            <td>{education.degree ? education.degree:'NIL'}</td>
            <td>{education.details ? education.details:'NIL'}</td>
            <td>{education.grade ? education.grade:'NIL'}</td>
            <td>{education.subjects ? education.subjects:'NIL'}</td>
            <td>{education.remarks ? education.remarks:'NIL'}</td>
        </tr>
    )
}

export default Education;