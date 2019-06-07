import React, { Component } from 'react';
import axios from "axios";

import Header from "../../components/Header";

import "./css/style.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      searchBar: "",
      isLoading: true,
      nome: ''
    }

    this.onClickNav = this.onClickNav.bind(this);
  }

  componentDidMount() {
    this.getEmpresas();
  }

  getEmpresas() {
    this.setState({ isLoading: true });
    axios.get(`http://empresas.ioasys.com.br/api/v1/enterprises?name=${this.searchBar}`, {})
    .then(response => {
      this.setState({ nome: response.data.nome });
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.setState({ isLoading: false });
    });
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
      <div>
        <Header onClickNav={this.onClickNav} valueSearch={this.state.searchBar} onChange={this.handleFormChange} onSubmit={this.handleSubmit} search={this.state.search} />
        <div id="home-view">
          <div className="section">
            <div className="container">
              { this.state.search ? 
                this.state.isLoading ? (
                  <div className="row">
                    <div className="col s12 m12 l12 xl12">
                      <span className="is-loading-custom" />
                    </div>
                  </div>
                ) : (
                  <div className="row search-false">
                    <div class="col s12 m7">
                      <div class="card horizontal">
                        <div class="card-image">
                          <img src="https://lorempixel.com/100/190/nature/6" alt="" />
                        </div>
                        <div class="card-stacked">
                          <div class="card-content">
                            <p>Dados da empresa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                <div className="search-false">
                  <p>Clique na busca para iniciar.</p>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;