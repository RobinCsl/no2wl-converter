import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UpdateWordList = ({ updateWordList }) => {
  const { result } = updateWordList;
  if (result && result instanceof Array) {
    return <div>{result.join(" ")}</div>;
  }
  return <div>{result}</div>;
};

UpdateWordList.propTypes = {
  updateWordList: PropTypes.shape({
    result: PropTypes.oneOfType([
      PropTypes.instanceOf(Array),
      PropTypes.string,
    ]),
  }).isRequired,
};

const mapStateToProps = state => ({ updateWordList: state.updateWordList });

export default connect(mapStateToProps)(UpdateWordList);
