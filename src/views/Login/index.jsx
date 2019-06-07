import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import auth from "../../auth";
import withConsumer from "../../components/AppContext/withConsumer";

import Button from "../../components/Button";
// import Input from "../../components/Input";

import logo from "./img/logo.png";
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
    try {
      e.preventDefault();

      this.setState({ isLoadingButton: true });

      this.setState({ answer: "" });

      if (!this.validator.allValid()) {
        this.setState({
          answer: [
            <i className="material-icons" key="">
              error_outline
            </i>,
            "Erros de validações nos campos."
          ]
        });
        this.setState({ isLoadingButton: false });
        this.validator.showMessages();
        this.forceUpdate();
        return;
      }

      await auth.login(this.state.email, this.state.password);
    } catch (error) {
      if (error.code === "auth/user-disabled") {
        this.setState({
          answer: [
            <i className="material-icons align-icon" key="">
              error_outline
            </i>,
            "Usuário desabilitado. Entre em contato com o administrador!"
          ]
        });
      } else {
        this.setState({
          answer: [
            <i className="material-icons align-icon" key="">
              error_outline
            </i>,
            "E-mail ou senha inválidos. Tente novamente!"
          ]
        });
      }
      this.setState({ isLoadingButton: false });
    }
  };

  render() {
    return (
      <div id="login-view">
        <section>
          <div className="container">
            <div className="logo">
              <div className="row">
                <div className="col-sm">
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">

              </div>
            </div>
{/* 
            <div className="columns is-centered">
              <div className="column is-8-tablet is-6-desktop">
                <div className="box-round">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field"> */}
                      {/* <Input
                        label="Login"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleFormChange}
                      /> */}
                      {/* <span>
                        {this.validator.message(
                          "email",
                          this.state.email,
                          "required"
                        )}
                      </span> */}
                    {/* </div>

                    <div className="field margin-input"> */}
                      {/* <Input
                        label="Senha"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleFormChange}
                      />
                      <span>
                        {this.validator.message(
                          "password",
                          this.state.password,
                          "required"
                        )}
                      </span> */}
                    {/* </div>

                    <div className="answer margin-input">
                      {this.state.answer}
                    </div> */}

                    <div className="field margin-other btn">
                      <Button name="Entrar" type="submit" isLoading={this.state.isLoadingButton} />
                    </div>

                    {/* <div className="field margin-other forgot">
                      <NavLink to="/login/redefinir-senha">
                        Esqueceu sua senha?
                      </NavLink>
                    </div> */}
                  {/* </form> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    );
  }
}

export default withConsumer(Login);
