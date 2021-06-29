import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaUserNinja} from "react-icons/fa";
import "./App.css";

const Footer = () => {
  return (
   <footer className='footer'>
   <div className="footer-div">
     <p className="footer-para">Reach out</p>
     <ul className="footer-ul">
       <li><a href="/"><FaGithub className="footer-icon"/></a></li>
       <li><a href="/"><FaLinkedin className="footer-icon"/></a></li>
       <li><a href="/"><FaInstagram className="footer-icon"/></a> </li>
       <li> <a href="/"><FaUserNinja className="footer-icon"/></a></li>
     </ul>
     <p className="footer-para">If you like what you see, it would help if you marked it star or fork it on <a href="/">github</a>.</p>
    </div>
   </footer>
  );
};

export default Footer;
