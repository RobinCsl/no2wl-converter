const requestWordList = () => ({
  type: "REQUEST_WORD_LIST",
});

const receiveWordList = payload => ({
  type: "RECEIVE_WORD_LIST",
  error: payload.error,
  wordList: payload.result,
});

const fetchWordList = state => (dispatch) => {
  dispatch(requestWordList());
  const { inputValue } = state.updateInputValue;
  return fetch(`http://localhost:4000/${inputValue}`)
    .then(res => res.json())
    .then(json => dispatch(receiveWordList(json)));
};

export default fetchWordList;
