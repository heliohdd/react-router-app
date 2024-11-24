import "./Navbar.css"

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/product/:id">Produto</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  );
};

export default Navbar;
