import React from "react";
import logo from "../../logo.svg";
import "./App.scss";

import UpdateWordList from "../../containers/UpdateWordList";
import ShowAnswer from "../../containers/ShowAnswer";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Number 2 Word List<span className="flashing">_</span>
      </h1>
    </header>
    <p className="App-intro">
      Ever had a Nokia 3310? Remember the old days by playing with the input
      field below!
    </p>
    <UpdateWordList />
    <ShowAnswer />
  </div>
);

export default App;
