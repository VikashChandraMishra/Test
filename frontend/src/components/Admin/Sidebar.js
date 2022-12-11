import { Link } from 'react-router-dom';
import '../../styles/sidebar.css'

const Sidebar = () => {
    return (
        <div id="sidebar">
            <h3 className="text-center py-4">Admin Menu</h3>
            <div className="my-4">
                <Link to="#">
                    <div className="py-2 px-2 my-2 option">Approved Applications</div>
                </Link>
                <Link to="#">
                    <div className="py-2 px-2 my-2 option">All Applications</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;