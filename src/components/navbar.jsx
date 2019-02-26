import React, { Component } from 'react';

// Stateless Functional Components
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

// Shortcut --> sfc tab
export default NavBar;
