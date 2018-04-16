import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateWordList, updateInputValue } from "../actions";
import Input from "../components/Input";

const UpdateWordList = (props) => {
  const { dispatch } = props;
  return (
    <div>
      <Input
        onChange={async (e) => {
          e.preventDefault();
          dispatch(updateInputValue(e.target.value));
          await fetch(`http://localhost:4000/${e.target.value}`)
            .then(res => res.json())
            .then((res) => {
              const { result, error } = res;
              dispatch(updateWordList(error || result || []));
            });
        }}
        value={props.updateInputValue.inputValue}
      />
    </div>
  );
};

UpdateWordList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  updateInputValue: PropTypes.shape({
    inputValue: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({ updateInputValue: state.updateInputValue });

export default connect(mapStateToProps)(UpdateWordList);
