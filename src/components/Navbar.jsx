import "./Navbar.css"

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product/:id">Produto</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
