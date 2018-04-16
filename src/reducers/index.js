import { combineReducers } from "redux";
import updateWordList from "./updateWordList";
import updateInputValue from "./updateInputValue";

export default combineReducers({
  updateWordList,
  updateInputValue,
});
