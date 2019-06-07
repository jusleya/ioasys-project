import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
// import { NavLink, Redirect } from "react-router-dom";
import withConsumer from "../../components/AppContext/withConsumer";
// import auth from "../../auth";

import Button from "../../components/Button";

import email from "./img/email.svg";
import logo from "./img/logo.png";
import senha from "./img/senha.svg";
import "./css/style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      answer: "",
      isLoadingButton: false
    };

    this.validator = new SimpleReactValidator({
      messages: {
        default: "Campo obrigatório"
      }
    });
  }

  componentDidMount() {
    document.title = "Login";
  }

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ answer: "" });
  };

  handleSubmit = async e => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="login-view">
        <section>
          <div className="container">
            <div className="row">
              <div className="col s12 m12 l12 xl12">
                <img src={logo} alt=""/>
              </div>
            </div>
            
            <div className="row">
              <div className="col s12 m12 l12 xl12 center-align">
                <p><b>BEM-VINDO AO EMPRESAS</b></p>
                <p>Lorem ipsum dolor sit amet, contetur<br /> adipiscing elit. Nunc accumsan.</p>
              </div>
            </div>

            <form className="col s12 m12 l12 xl12">
              <div className="row center-align">
                <div className="col m3 l3 xl3" />
                <div className="input-field col s12 m6 l6 xl6">
                  <img className="prefix" src={email} alt=""/>
                  <input id="icon_prefix" name="email" type="email" value={this.state.email} onChange={this.handleFormChange}  />
                  <label className="icon_prefix">E-mail</label>
                </div>
                <div className="col m3 l3 xl3" />
              </div>
              <div className="row center-align">
                <div className="col m3 l3 xl3" />
                <div className="input-field col s12 m6 l6 xl6">
                  <img className="prefix" src={senha} alt=""/>
                  <input id="icon_prefix" name="password" type="password" value={this.state.password} onChange={this.handleFormChange}  />
                  <label className="icon_prefix">Senha</label>
                </div>
                <div className="col m3 l3 xl3" />
              </div>
              <div className="row center-align">
                <div className="col m3 l3 xl3" />
                <div className="col col s12 m6 l6 xl6 center-align">
                  <Button name="Entrar" type="submit" isLoading={this.state.isLoadingButton} />
                </div>
                <div className="col m3 l3 xl3" />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withConsumer(Login);
