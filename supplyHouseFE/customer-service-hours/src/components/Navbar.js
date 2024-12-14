// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/manage-special-hours">Manage Special Hours</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;