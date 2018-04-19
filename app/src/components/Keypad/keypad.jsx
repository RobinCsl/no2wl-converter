import React from "react";
import PropTypes from "prop-types";
import KeypadKey from "./keypadkey";
import "./keypad.scss";

const keyboard = {
  1: ["<"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const Keypad = ({ onKeyPress, onClickKeypadKey, onKeyDownKeypadKey }) => (
  <div className="keypad" role="button" tabIndex="0" onKeyPress={onKeyPress}>
    {Object.keys(keyboard).map(key => (
      <KeypadKey
        key={`keyboard-${keyboard[key]}`}
        digit={key}
        letters={keyboard[key].join(" ")}
        onClick={() => onClickKeypadKey(key)}
        onKeyDown={onKeyDownKeypadKey}
      />
    ))}
  </div>
);

Keypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  onClickKeypadKey: PropTypes.func.isRequired,
  onKeyDownKeypadKey: PropTypes.func.isRequired,
};

export default Keypad;
