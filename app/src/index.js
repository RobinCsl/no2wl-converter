/* eslint-disable react/jsx-filename-extension */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  {
    updateInputValue: { inputValue: "" },
    receiveWordList: { wordList: [], error: "" },
    increaseLoadMoreIndex: { loadMoreIndex: 20 },
  },
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
