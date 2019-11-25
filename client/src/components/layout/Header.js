import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    // const authLinks = (
    //   <ul>
    //     <li></li>
    //   </ul>
    // );

    const guestLinks = (
      <ul>
        <li>
          <Link className="navLink" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );

    return (
      <header>
        <nav className="container">
          <span className="appName navLink">JWT Auth</span>
          {guestLinks}
        </nav>
      </header>
    );
  }
}

export default Header;
