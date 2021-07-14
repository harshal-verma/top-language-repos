import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaUserNinja} from "react-icons/fa";
import "./App.css";

const Footer = () => {
  return (
   <footer className='footer'>
   <div className="footer-div">
     <p className="footer-para">Reach out</p>
     <ul className="footer-ul">
       <li><a href="https://github.com/harshal-verma" title="GitHub"><FaGithub className="footer-icon"/></a></li>
       <li><a href="https://www.linkedin.com/in/harshal-verma-5432781a1/" title="LinkedIn"><FaLinkedin className="footer-icon"/></a></li>
       <li><a href="https://twitter.com/harshalvermaaaa" title="Twitter"><FaTwitter className="footer-icon"/></a> </li>
       <li> <a href="https://harshalverma.netlify.app/" title="Portfolio"><FaUserNinja className="footer-icon"/></a></li>
     </ul>
     <p className="footer-para">If you like what you see, it would help if you marked it star or fork it on <a href="/">github</a>.</p>
    </div>
   </footer>
  );
};

export default Footer;
