import React from "react";
import ReactDOM from "react-dom";
import { KeypadKey } from "./index";

describe("KeypadKey", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <KeypadKey
        digit="2"
        letters="a b c"
        onClick={() => {}}
        onKeyDown={() => {}}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has className keypadkey", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <KeypadKey
        digit="2"
        letters="a b c"
        onClick={() => {}}
        onKeyDown={() => {}}
      />,
      div,
    );
    expect(div.children[0].className).toBe("keypadkey");
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has two children", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <KeypadKey
        digit="2"
        letters="a b c"
        onClick={() => {}}
        onKeyDown={() => {}}
      />,
      div,
    );
    const { children } = div.children[0];
    expect(children).toHaveLength(2);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has child div with className keypadkey__digit", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <KeypadKey
        digit="2"
        letters="a b c"
        onClick={() => {}}
        onKeyDown={() => {}}
      />,
      div,
    );
    const firstSubChild = div.children[0].children[0];
    expect(firstSubChild).toBeInstanceOf(HTMLDivElement);
    expect(firstSubChild.className).toBe("keypadkey__digit");
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has child div with className keypadkey__letters", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <KeypadKey
        digit="2"
        letters="a b c"
        onClick={() => {}}
        onKeyDown={() => {}}
      />,
      div,
    );
    const firstSubChild = div.children[0].children[1];
    expect(firstSubChild).toBeInstanceOf(HTMLDivElement);
    expect(firstSubChild.className).toBe("keypadkey__letters");
    ReactDOM.unmountComponentAtNode(div);
  });
});
