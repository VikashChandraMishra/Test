const IndustryExp = (props) => {
    const { experience } = props;

    return (
        <tr>
            <td>{experience.post}</td>
            <td>{experience.organization}</td>
            <td>{experience.begin_date}</td>
            <td>{experience.end_date}</td>
            <td>{experience.experience}</td>
            <td>{experience.remarks}</td>
        </tr>
    )
}

export default IndustryExp;