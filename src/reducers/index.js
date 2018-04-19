import { combineReducers } from "redux";
import updateWordList from "./updateWordList";
import updateInputValue from "./updateInputValue";
import receiveWordList from "./receiveWordList";
import increaseLoadMoreIndex from "./increaseLoadMoreIndex";

export default combineReducers({
  updateWordList,
  updateInputValue,
  receiveWordList,
  increaseLoadMoreIndex,
});
