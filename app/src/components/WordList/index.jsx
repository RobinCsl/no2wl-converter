import React from "react";
import PropTypes from "prop-types";
import "./wordlist.scss";

const WordList = ({
  wordList, error, loadMore, loadMoreOnClick,
}) => {
  const errorMessage = error && <div className="wordlist__error">{error}</div>;
  const loadMoreButton = loadMore && (
    <button className="wordlist__loadmore" onClick={loadMoreOnClick}>
      Load More{" "}
    </button>
  );

  const words = wordList && (
    <div className="wordlist__words">
      {wordList.map(word => (
        <div key={`word-${word}`} className="wordlist__words__word">
          {word}
        </div>
      ))}
    </div>
  );

  return (
    <div className="wordlist">
      {errorMessage}
      {words}
      {loadMoreButton}
    </div>
  );
};

WordList.propTypes = {
  error: PropTypes.string,
  wordList: PropTypes.instanceOf(Array),
  loadMore: PropTypes.bool,
  loadMoreOnClick: PropTypes.func,
};

WordList.defaultProps = {
  error: "",
  wordList: [],
  loadMore: true,
  loadMoreOnClick: () => {},
};

export default WordList;
