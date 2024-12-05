import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3 className="footer-heading">About Us</h3>
          <p>
            Welcome to My Blog Website! We share insightful blogs on design,
            development, and creative topics to inspire your next big idea.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/blogs">All Blogs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"><FaFacebookF/></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"> <FaTwitter/></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"><FaInstagram/></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"><FaLinkedin/></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3 className="footer-heading">Subscribe</h3>
          <p>Join our newsletter to get the latest blogs directly to your inbox!</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 My Blog Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
