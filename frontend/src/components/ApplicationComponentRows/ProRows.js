const ProRows = (props) => {

    const { rows, calcTotalExp } = props;

    const calcExp = () => {
        for (let i = 0; i < rows; i++) {
            let exp = document.getElementsByClassName('pro-exp')[i];
            let begin = document.getElementsByClassName('pro-begin')[i].value.split('-');
            let end = document.getElementsByClassName('pro-end')[i].value.split('-');
            let years = parseInt(end[0]) - parseInt(begin[0]);
            if (isNaN(years)) return;
            let months = parseInt(end[1]) - parseInt(begin[1]);
            if (months < 0 && years > 0) {
                months = 12 + months;
                years -= 1;
            }
            let days = 0;
            if (parseInt(begin[2]) === parseInt(end[2])) days = 0;
            else if ((parseInt(begin[2]) > parseInt(end[2]) && begin[1] !== end[1])) {
                days = parseInt(begin[2]);
                months -= 1;
                switch (parseInt(begin[1])) {
                    case 1: days = 31 - days; break;
                    case 2: days = 28 - days; break;
                    case 3: days = 31 - days; break;
                    case 4: days = 30 - days; break;
                    case 5: days = 31 - days; break;
                    case 6: days = 30 - days; break;
                    case 7: days = 31 - days; break;
                    case 8: days = 31 - days; break;
                    case 9: days = 30 - days; break;
                    case 10: days = 31 - days; break;
                    case 11: days = 30 - days; break;
                    case 12: days = 31 - days; break;
                    default: break;
                }
                days += parseInt(end[2]);
            }
            else if ((parseInt(begin[2]) > parseInt(end[2]) && begin[1] === end[1])) {
                if (years > 0) {
                    months = 11;
                    years -= 1;
                }
                days = parseInt(begin[2]) - parseInt(end[2]);
            }
            else if (parseInt(begin[2]) < parseInt(end[2])) {
                days = parseInt(end[2]) - parseInt(begin[2]);
            }
            let age = `${years} years, ${months} months and ${days} days`;
            exp.value = age;
        }

        calcTotalExp('pro-exp', rows);
    }

    return (
        <tr>
            <td>
                <input type="text" className="form-control pro-post" />
            </td>
            <td>
                <input type="text" className="form-control pro-organization" />
            </td>
            <td>
                <input type="date" className="form-control pro-begin" onChange={calcExp} />
            </td>
            <td>
                <input type="date" className="form-control pro-end" onChange={calcExp} />
            </td>
            <td>
                <input type="text" className="form-control pro-exp" />
            </td>
            <td>
                <input type="text" className="form-control pro-remarks" />
            </td>
        </tr>

    )
}

export default ProRows;