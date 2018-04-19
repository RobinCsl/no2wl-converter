const wordList = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_WORD_LIST": {
      return {
        ...state,
        result: action.payload,
      };
    }
    default:
      return state;
  }
};

export default wordList;
