const increaseLoadMoreIndex = payload => ({
  type: "INCREASE_LOAD_MORE_INDEX",
  payload: payload + 20,
});

export default increaseLoadMoreIndex;
