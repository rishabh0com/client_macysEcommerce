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
          <Link style={menuStyle} to="/shop?category=women">
            Women
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?category=men">
            Men
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?category=kids">
            Kids & Baby
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?category=homeware">
            Home
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?subCategory=shoes">
            Shoes
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?subCategory=handbags">
            Handbags & Accessories
          </Link>
        </div>
        <div>
          <Link style={menuStyle} to="/shop?subCategory=jewelry">
            Jewelry
          </Link>
        </div>
        <div>
          <Link style={saleRed} to="/shop">
            Sale
          </Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navigation;
