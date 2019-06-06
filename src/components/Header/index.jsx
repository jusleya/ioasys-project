import React, { Component } from 'react';

import logo from "./img/logo.png";
import './css/style.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar justify-content-center">
          <a className="navbar-brand" href="/">
            <img src={logo} alt=""/>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;