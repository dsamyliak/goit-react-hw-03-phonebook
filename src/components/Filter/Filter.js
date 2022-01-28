import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <>
    <span>Find contact by name</span>
    <input
      className="inputFilter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
