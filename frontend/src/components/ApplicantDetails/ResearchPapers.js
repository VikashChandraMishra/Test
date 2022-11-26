const ResearchPapers = (props) => {
    const { paper } = props;

    return (
        <tr>
            <td>{paper.title}</td>
            <td>{paper.details}</td>
            <td>{paper.remarks}</td>
        </tr>
    )
}

export default ResearchPapers;