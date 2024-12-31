import './style.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">User</NavLink></li>
            <li><NavLink to="/products">Product</NavLink></li>
        </ul>
    )
}
export default Header;