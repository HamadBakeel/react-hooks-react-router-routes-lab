import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
  const links = [
    {text: "Home", path: "/"},
    {text: "Movies", path: "/movies"},
    {text: "Directors", path: "/directors"},
    {text: "Actors", path: "/actors"},
  ]
  return <ul className="navbar">
    {links.map(link =>
        <li key={link.text}>
          <NavLink exact to={link.path}>
            {link.text}
          </NavLink>
        </li>)}
  </ul>;
}

export default NavBar;
