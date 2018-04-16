/* eslint-disable react/jsx-filename-extension */
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = createStore(rootReducer, {
  updateInputValue: { inputValue: "" },
  updateWordList: { result: [] },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
