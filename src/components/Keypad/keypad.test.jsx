import React from "react";
import ReactDOM from "react-dom";
import { Keypad } from "./index";

const emptyHandler = () => {};

describe("Keypad", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Keypad
        onKeyPress={emptyHandler}
        onClickKeypadKey={emptyHandler}
        onKeyDownKeypadKey={emptyHandler}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has className keypad", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Keypad
        onKeyPress={emptyHandler}
        onClickKeypadKey={emptyHandler}
        onKeyDownKeypadKey={emptyHandler}
      />,
      div,
    );
    expect(div.children[0].className).toBe("keypad");
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has 9 children", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Keypad
        onKeyPress={emptyHandler}
        onClickKeypadKey={emptyHandler}
        onKeyDownKeypadKey={emptyHandler}
      />,
      div,
    );
    const { children } = div.children[0];
    expect(children).toHaveLength(9);
    ReactDOM.unmountComponentAtNode(div);
  });
});
