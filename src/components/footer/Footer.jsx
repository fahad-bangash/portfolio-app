import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { ImTwitter } from "react-icons/im";
const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Fahad Blogger
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://github.com">
          <GoMarkGithub />
        </a>
        <a href="https://twitter.com">
          <ImTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Developed by Fahad Bangash</small>
      </div>
    </footer>
  );
};

export default Footer;
