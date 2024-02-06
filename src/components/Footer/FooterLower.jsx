import React from 'react';
import "../../styles/footer.css";

const FooterLower = () => {
  return (
    <footerLower className="footerLower">
      {/* Insert your footerLower content here */}
      <div className="footerLower-content">
        {/* Example links */}
        <a href="#">Customer Service</a>
        <a href="#">Help & FAQs</a>
        <a href="#">Order Tracking</a>
        <a href="#">Shipping & Delivery</a>
        <a href="#">Returns</a>
        <a href="#">Contact Us</a>
        <a href="#">Shipping To Go to U.S. site</a>
        <a href="#">Our Stores</a>
        <a href="#">Find a Store</a>
        <a href="#">Tell Us What You Think</a>
        <a href="#">Macy's Backstage</a>
        <a href="#">Personal Stylist</a>
      </div>
      {/* End of footerLower content */}
      <div className="footerLower-copyright">
        <p>&copy; 2023 Macy's Inc. All Rights Reserved.</p>
      </div>
      {/* End of footerLower copyright */}
    </footerLower>
  );
};

export default FooterLower;


