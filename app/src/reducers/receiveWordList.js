const receiveWordList = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_WORD_LIST":
      return {
        ...state,
        error: action.error || "",
        wordList: action.wordList || [],
      };
    default:
      return state;
  }
};

export default receiveWordList;
