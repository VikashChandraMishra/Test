import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-2 bg-light" id="sidebar">
            <h3 className="text-center my-3">Recruitment-XYZ</h3>
            <div className="my-4">
                <Link to="#">
                    <div className="py-2 px-2 my-2 option">Dummy link</div>
                </Link>

                <Link to="#">
                    <div className="py-2 px-2 my-2 option">Dummy link</div>
                </Link>
                <Link to="#">
                    <div className="py-2 px-2 my-2 option">Dummy link</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;