import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, value }) => (
  <input
    onChange={onChange}
    value={value}
    placeholder="Enter a sequence of digits, e.g. 23"
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: "",
};

export default Input;
