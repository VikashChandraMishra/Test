const AcademicExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.post ? experience.post:'NIL'}</td>
            <td>{experience.organization ? experience.organization:'NIL'}</td>
            <td>{experience.begin_date ? experience.begin_date:'NIL'}</td>
            <td>{experience.end_date ? experience.end_date:'NIL'}</td>
            <td>{experience.duty ? experience.duty:'NIL'}</td>
            <td>{experience.special_duty ? experience.special_duty:'NIL'}</td>
            <td>{experience.experience ? experience.experience:'NIL'}</td>
            <td>{experience.remarks ? experience.remarks:'NIL'}</td>
        </tr>
    )
}

export default AcademicExp;