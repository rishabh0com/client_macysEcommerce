import "../styles/navigation.css";
import { Link } from "react-router-dom";

const menuStyle = {
  textDecoration: "none",
  color: "black",
};
const saleRed = {
  textDecoration: "none",
  color: "red",
};

function Navigation() {
  return (
    <div className="main">
      <nav>
        <div>
          <Link style={menuStyle} to="/shop/women">
            Women
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop/men">
            Men
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop/kids&baby">
            Kids & Baby
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/home">
            Home
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop/shoes">
            Shoes
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop/handbags&accessories">
            Handbags & Accessories
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop/jewelry">
            Jewelry
          </Link>
        </div>
        <div>
          <Link style={saleRed} to="/shop/sale">
            Sale
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navigation;
