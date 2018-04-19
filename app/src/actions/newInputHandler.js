import fetchWordList from "./wordList";

const updateInputValue = payload => ({
  type: "UPDATE_INPUT_VALUE",
  payload,
});

const receiveNewInput = payload => ({
  type: "RECEIVE_NEW_INPUT",
  payload,
});

const handleNewInput = payload => (dispatch, getState) => {
  dispatch(receiveNewInput(payload));
  dispatch(updateInputValue(payload));
  dispatch(fetchWordList(getState()));
};

export default handleNewInput;
