import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import TestComponent from "./components/TestComponent";
import App from "./App";

afterEach(cleanup);

// it("Title should be welcome", () => {
//   const { getByTestId } = render(<TestComponent />);

//   ReactDOM.render();
//   //   expect(getByTestId("title")).toHaveTextContent("Hello World");
// });

// it("renders without creashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const startingState = {
  cart: [
    {
      name: "ESSENTIAL YOGA MAT 4 MM - DARK GREEN",
      description:
        "We designed this mat for discovering gentle yoga. Want to anchor your feet on your own mat? Lightweight, accessible, and made of PVC-free foam, this mat helps you tune in with yourself during your very first yoga sessions.",
      price: 15,
      oldPrice: 12,
      sale: false,
      image:
        "https://contents.mediadecathlon.com/p1782777/k$fed178204fda8e77981754036bec6010/sq/Essential+Yoga+Mat+4+mm+Dark+Green.webp?f=1000x1000",
      category: "fitness",
    },
  ],
};

// function reducer(state = startingState, action) {
//   switch (action.type) {
//     case "GET_CART":
//       return { ...state };
//   }
// }
// function renderWithRedux(
//   component,
//   { initialState, store = createStore(reducer, initialState) } = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//   };
// }

// it("Renders the connected app with initialState", () => {
//   const { getByTestId, getByText } = renderWithRedux(<App />, {
//     initalState: { cart: [] },
//   });
// });
