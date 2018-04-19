import React from "react";
import PropTypes from "prop-types";
import "./keypadkey.scss";

const KeypadKey = ({
  digit, letters, onClick, onKeyDown,
}) => (
  <div
    key={`keyboard-${letters}`}
    className="keypadkey"
    role="button"
    tabIndex={digit}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <div className="keypadkey__digit">{digit}</div>
    <div className="keypadkey__letters">{letters}</div>
  </div>
);

KeypadKey.propTypes = {
  digit: PropTypes.string.isRequired,
  letters: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default KeypadKey;
