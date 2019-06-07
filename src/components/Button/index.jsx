import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./css/style.css";

const Button = props =>
  props.type === "submit" ? (
    <div id="button-component">
      <button className={`button ${props.isLoading ? "is-loading" : ""}`} onClick={props.onClick} disabled={props.disabled}>
        {props.name}
      </button>
    </div>
  // ) : props.type === "external" ? (
  //   <div id="button-component">
  //     <a href={props.link} target="_blank" rel="noopener noreferrer" className={`button ${props.isLoading ? "is-loading" : ""}`}>
  //       {props.name}
  //     </a>
  //   </div>
  // ) : props.type === "button" ? (
  //   <div id="button-component">
  //     <button className={`button ${props.isLoading ? "is-loading" : ""}`} onClick={props.onClick} disabled={props.disabled} type="button">
  //       {props.name}
  //     </button>
  //   </div>
  ) : (
    <div id="button-component">
      <NavLink to={props.link} className={`button ${props.isLoading ? "is-loading" : ""}`}>
        {props.name}
      </NavLink>
    </div>
  );

Button.propTypes = {
  isLoading: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Button;