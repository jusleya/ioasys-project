import React, { Component } from 'react';

import logo from "./img/logo.png";
import './css/style.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="">
          <div className="nav-wrapper">
            <a className="brand-logo center" href="/">
              <img src={logo} alt=""/>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a><i className="material-icons icon">search</i></a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;