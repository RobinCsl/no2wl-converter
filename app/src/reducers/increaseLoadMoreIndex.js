const wordList = (state = {}, action) => {
  switch (action.type) {
    case "INCREASE_LOAD_MORE_INDEX": {
      return {
        ...state,
        loadMoreIndex: action.payload,
      };
    }
    default:
      return state;
  }
};

export default wordList;
