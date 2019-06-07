import React from "react";
import PropTypes from "prop-types";

import "./css/style.css";

const SearchBar = props => {
  return (
    <div id="search-bar-component">
      <form onSubmit={props.onSubmit}>
        <div className="input-field">
          <input
            className="input"
            type="search"
            placeholder={props.placeholder}
            name="searchBar"
            onChange={props.onChange}
            value={props.value}
            id="search" 
            required
          />
          <label className="label-icon search">
            <i className="material-icons icon">search</i>
          </label>
          <i className="material-icons icon" onClick={props.onClick}>close</i>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string
};

export default SearchBar;
