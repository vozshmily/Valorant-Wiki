import React from "react";
import "./Nav.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav__main__container">
      <Link to="/" className="site__nav__p">
        AGENTS
      </Link>
      <Link to="/Maps" className="site__nav__p">
        MAPS
      </Link>
      <Link to="/Arsenal" className="site__nav__p">
        ARSENAL
      </Link>
    </nav>
  );
};

export default Nav;
