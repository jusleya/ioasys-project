import React, { Component } from 'react';

import SearchBar from '../Searchbar';

import logo from "./img/logo.png";
import './css/style.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper hide-on-med-and-down">
            { this.props.search ? 
              <div className="row">
                <div className="col s12 m12 l12 xl12">
                  <SearchBar value={this.props.valueSearch} placeholder="Pesquisar" onClick={this.props.onClickNav} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                </div>
              </div>
            :
              <div>
                <a className="brand-logo center" href="/">
                  <img src={logo} alt=""/>
                </a>
                <ul className="right">
                  <li>
                    <button className="search" onClick={this.props.onClickNav} type="button">
                      <i className="material-icons icon">search</i>
                    </button>
                  </li>
                </ul>
              </div>
            }
          </div>


          <div className="nav-wrapper show-on-medium hide-on-med-and-up">
            { this.props.search ? 
              <div className="row">
                <div className="col s12 m12 l12 xl12">
                  <SearchBar value={this.props.valueSearch} placeholder="Pesquisar" onClick={this.props.onClickNav} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                </div>
              </div>
            :
              <div>
                <a className="brand-logo left" href="/">
                  <img src={logo} alt=""/>
                </a>
                <ul className="right">
                  <li>
                    <button className="search" onClick={this.props.onClickNav} type="button">
                      <i className="material-icons icon">search</i>
                    </button>
                  </li>
                </ul>
              </div>
            }
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;