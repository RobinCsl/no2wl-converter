import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increaseLoadMoreIndex, handleNewInput } from "../../actions";
import logo from "../../logo.svg";
import "./App.scss";

import { Keypad } from "../Keypad";
import WordList from "../WordList";

const App = ({ receiveWordList, increaseLoadMoreIndexState, dispatch }) => {
  const { wordList, error } = receiveWordList;
  const { loadMoreIndex } = increaseLoadMoreIndexState;

  /**
   * Constants
   */
  const words = (wordList && wordList.slice(0, loadMoreIndex)) || [];
  const loadMore = (wordList && wordList.length > loadMoreIndex) || false;
  /**
   * Handlers
   */

  const loadMoreOnClick = () => {
    dispatch(increaseLoadMoreIndex(loadMoreIndex));
  };

  const onKeyPress = (event) => {
    const key = String.fromCharCode(event.which);
    dispatch(handleNewInput(key));
  };
  const onClickKeypadKey = (key) => {
    dispatch(handleNewInput(key));
  };
  const onKeyDownKeypadKey = (event) => {
    if (event.which === 13) {
      const newInput = event.target.tabIndex;
      dispatch(handleNewInput(newInput));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Number 2 Word List<span className="flashing">_</span>
        </h1>
      </header>
      <p className="App-intro">
        Ever had a Nokia 3310? Remember the old days by playing with the keypad
        below!
      </p>
      <div className="keypad-container">
        <Keypad
          onKeyPress={onKeyPress}
          onClickKeypadKey={onClickKeypadKey}
          onKeyDownKeypadKey={onKeyDownKeypadKey}
        />
      </div>
      <div className="wordlist-container">
        <WordList
          wordList={words}
          error={error}
          loadMore={loadMore}
          loadMoreOnClick={loadMoreOnClick}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  receiveWordList: PropTypes.shape({
    error: PropTypes.string,
    wordList: PropTypes.instanceOf(Array),
  }).isRequired,
  increaseLoadMoreIndexState: PropTypes.shape({
    loadMoreIndex: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  receiveWordList: state.receiveWordList,
  increaseLoadMoreIndexState: state.increaseLoadMoreIndex,
});

export default connect(mapStateToProps)(App);
