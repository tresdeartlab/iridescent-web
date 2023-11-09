import React, { useState } from "react";
import Carrito from './Carrito';

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/home" className="title">
        IRIDESCENT
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/AboutIridescent">About Iridescent</NavLink>
        </li>
        <li>
          <NavLink to="/Sale">Sale %</NavLink>
        </li>
        <li>
          <Carrito />
        </li>
      </ul>
    </nav>
  );
};
