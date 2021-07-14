import React from "react";
import { FaGithubAlt, FaGitAlt } from "react-icons/fa";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-link">
        <FaGithubAlt className="navbar-icons" />
        <h2 className="navbar-heading">TopRepos</h2>
      </a>
      <a href="https://github.com/harshal-verma/top-repos" className="navbar-link">
        <FaGitAlt className="navbar-icons" />
        <h2 className="navbar-heading">Fork</h2>
      </a>
    </nav>
  );
};

export default Navbar;
