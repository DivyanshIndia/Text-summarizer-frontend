import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link className="change" to="/">
          <p className="logo">LACONIC</p>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/Home">Home</Link>
        </li>

        <li>
          <Link to="/Proje">Project</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
        <li>
          <Link to="#">Github</Link>
        </li>
        <li>
          <Link to="#">Memes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
