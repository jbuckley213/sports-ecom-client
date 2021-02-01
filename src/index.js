import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./context/auth-context";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
