const updateInputValue = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_VALUE": {
      const inputValue =
        action.payload === "1"
          ? state.inputValue.slice(0, -1)
          : `${state.inputValue}${action.payload}`;
      return {
        ...state,
        inputValue,
      };
    }
    default:
      return state;
  }
};

export default updateInputValue;
