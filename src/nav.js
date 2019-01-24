import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => (
  <div>
    <div>
      <NavLink exact to="/">
        Jspanga
      </NavLink>{" "}
      |&nbsp;
      <NavLink to="/page1">page1</NavLink> |&nbsp;
      <NavLink to="/page2">page2</NavLink>
    </div>
  </div>
);
export default NavBar;
