import "../../styles/footer.css";
const FooterUpper = () => {
  return (
    <>
      <footer className="footerUpper">
          <div className="footerUpper-section customer-service">
            <h3>Customer Service</h3>
            <ul>
              <li>Help & FAQs</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footerUpper-section our-stores">
            <h3>Our Stores</h3>
            <ul>
              <li>Store Locator</li>
              <li>Find a Store</li>
            </ul>
          </div>

          <div className="footerUpper-section macy-s-inc">
            <h3>Macy's Inc.</h3>
            <ul>
              <li>About Macy's</li>
              <li>News Room</li>
              <li>Investors</li>
              <li>Macy's Gives</li>
            </ul>
          </div>

          <div className="footerUpper-section sign-up-social">
            <h3>Sign Up & Social</h3>
            <ul>
              <li>Email Sign Up</li>
              <li>Text Sign Up</li>
              <li>Connect With Us</li>
              <li>Mobile App</li>
            </ul>
          </div>
          <div className="social-media">
            <a href="#">f</a>
            <a href="#">O</a>
            <a href="#">X</a>
            <a href="#">P</a>
          </div>
      </footer>
    </>
  );
};

export default FooterUpper;
