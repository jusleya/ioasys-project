import React, { Component } from 'react';

import SearchBar from '../Searchbar';

import logo from "./img/logo.png";
import './css/style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      searchBar: ""
    }

    this.onClickNav = this.onClickNav.bind(this);
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(e);
    this.onClickNav();
  }

  onClickNav() {
    this.setState({ search: !this.state.search });
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper hide-on-med-and-down">
            { this.state.search ? 
              <div className="row">
                <div className="col s12 m12 l12 xl12">
                  <SearchBar value={this.state.searchBar} placeholder="Pesquisar" onClick={this.onClickNav} onChange={this.handleFormChange} onSubmit={this.handleSubmit} />
                </div>
              </div>
            :
              <div>
                <a className="brand-logo center" href="/">
                  <img src={logo} alt=""/>
                </a>
                <ul className="right">
                  <li>
                    <button className="search" onClick={this.onClickNav} type="button">
                      <i className="material-icons icon">search</i>
                    </button>
                  </li>
                </ul>
              </div>
            }
          </div>


          <div className="nav-wrapper show-on-medium hide-on-med-and-up">
            { this.state.search ? 
              <div className="row">
                <div className="col s12 m12 l12 xl12">
                  <SearchBar value={this.state.searchBar} placeholder="Pesquisar" onClick={this.onClickNav} onChange={this.handleFormChange} onSubmit={this.handleSubmit} />
                </div>
              </div>
            :
              <div>
                <a className="brand-logo left" href="/">
                  <img src={logo} alt=""/>
                </a>
                <ul className="right">
                  <li>
                    <button className="search" onClick={this.onClickNav} type="button">
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