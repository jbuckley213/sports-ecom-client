import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import TestComponent from "./components/TestComponent";
import App from "./App";

afterEach(cleanup);

// it("Title should be welcome", () => {
//   const { getByTestId } = render(<TestComponent />);

//   ReactDOM.render();
//   //   expect(getByTestId("title")).toHaveTextContent("Hello World");
// });

it("renders without creashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
