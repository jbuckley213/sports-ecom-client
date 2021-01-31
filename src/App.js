import React, { useState, useEffect } from "react";

import "./App.scss";
import { Switch, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Stripe from "./pages/Stripe";
import PaymentSuccess from "./pages/PaymentSuccess";
import ShoppingCart from "./pages/ShoppingCart";
import SideNavbar from "./components/SideNavBar/SideNavbar";
import Profile from "./pages/Profile";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import { getCart } from "./actions/cartActions";
import { withAuth } from "./context/auth-context";
import { AnimatePresence } from "framer-motion";

require("dotenv").config();

function App(props) {
  const location = useLocation();

  useEffect(() => {
    if (props.user !== null) {
      props.getCart();
    }
  }, []);

  // componentDidMount() {
  //   if (this.props.user !== null) {
  //     this.props.getCart();
  //   }
  // }
  return (
    <div className="container">
      {/* <Navbar /> */}
      <SideNavbar />
      <div className="page-container">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />

            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />

            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/stripe" component={Stripe} />
            <PrivateRoute exact path="/success" component={PaymentSuccess} />
            <PrivateRoute exact path="/cart" component={ShoppingCart} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => {
      dispatch(getCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(withAuth(App));
