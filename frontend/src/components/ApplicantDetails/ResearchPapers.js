const ResearchPapers = (props) => {
    const { paper } = props;

    return (
        <tr>
            <td>{paper.title ?paper.title:'NIL'}</td>
            <td>{paper.details ?paper.details:'NIL'}</td>
            <td>{paper.remarks ?paper.remarks:'NIL'}</td>
        </tr>
    )
}

export default ResearchPapers;