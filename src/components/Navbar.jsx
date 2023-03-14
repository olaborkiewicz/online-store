import { Link } from "react-router-dom";
import { links } from "../data/routes";

const Navbar = () => {
    return (
        <nav>
            <ul>
                {
                    links.map((item) => (
                        <li key={`route_${item.name}`} className="nav-item">
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;