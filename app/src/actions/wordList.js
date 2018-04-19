import Trie from "trie-js";
import words from "../words";

const requestWordList = () => ({
  type: "REQUEST_WORD_LIST",
});

const receiveWordList = (payload) => {
  const trie = new Trie(words);

  const wordList = [];
  if (payload && payload.result) {
    payload.result.forEach((res) => {
      if (trie.isPrefix(res) || trie.lookup(res)) {
        wordList.push(res);
      }
    });
  }

  return {
    type: "RECEIVE_WORD_LIST",
    error: payload.error,
    wordList,
  };
};

const fetchWordList = state => (dispatch) => {
  dispatch(requestWordList());
  const { inputValue } = state.updateInputValue;
  const errorMessage = "There was a problem fetching the data.";
  return fetch(`http://localhost:4000/${inputValue}`)
    .then(res => res.json())
    .then(json => dispatch(receiveWordList(json)))
    .catch(() => dispatch(receiveWordList({ error: errorMessage })));
};

export default fetchWordList;
