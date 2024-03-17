import { Link } from "react-router-dom";
const Sidebar = () => {

    const pageTitle = 'Home page';
    return (
        <div>

            <ul className="Nav">
                <li>
                    <Link to="/user-management">User Management</Link>
                </li>

                <li>
                    <Link to="/faq">  FAQ</Link>
                </li>

                <li>
                    <Link to="/contact">   Contact</Link>
                </li>

            </ul>

        </div>
    );
}
export default Sidebar;