import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className="footer-logo" />
          <p>
            Passionate developer dedicated to crafting clean, efficient, and
            user-friendly digital experiences. Always eager to learn,
            collaborate, and bring ideas to life through code.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2025 Abhay. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
