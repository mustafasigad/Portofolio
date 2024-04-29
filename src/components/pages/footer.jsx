import React from "react";
import {
  IoLogoLinkedin,
 
} from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
      MustiBend 
      </a>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/mustafa-sigad/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MustiBend Dev . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;