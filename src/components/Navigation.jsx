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

const screen = window.innerWidth;

function Navigation() {
  return (<>
  {screen > 768 ? (
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
      <hr/>
      </div>
  
  ) : (
    <div className="main">
    <nav className="mobile">
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
        <Link style={saleRed} to="/shop">
          Sale
        </Link>
      </div>
    </nav>
    {screen > 768 && <hr/>}
  </div>

  )}
  </>
  );
}

export default Navigation;
