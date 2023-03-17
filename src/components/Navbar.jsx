import { Link } from "react-router-dom";
import { links } from "../data/routes";

const Navbar = () => {
  let amountProduct = 0;
  return (
    <nav className="navigation">
      <img src="" alt="company-logo" className="navigation-logo" />
      <ul className="navigation-list">
        {links.map((item) => (
          <li key={`route_${item.name}`} className="navigation-list-item">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="navigation-cart">
        <a href="/">
          <img src="" alt="shopping-cart" className="navigation-cart-icon" />
        </a>
        <span className="amountOfProducts">{amountProduct}</span>
      </div>
    </nav>
  );
};

export default Navbar;
