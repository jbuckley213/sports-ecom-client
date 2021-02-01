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
import SideCart from "./components/SideCart/SideCart";
import Landing from "./pages/Landing";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import { getCart } from "./actions/cartActions";
import { withAuth } from "./context/auth-context";
import { AnimatePresence } from "framer-motion";
import { CartButton } from "./styles/cart";

require("dotenv").config();

function App(props) {
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    if (props.user !== null) {
      props.getCart();
    }
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <SideNavbar />
      <AnimatePresence>
        {showCart && <SideCart toggleCart={toggleCart} />}
      </AnimatePresence>
      {/* exitBeforeEnter */}
      <CartButton onClick={toggleCart}>
        <ShoppingBasketIcon />
      </CartButton>
      <div className="page-container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/home/:search" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route
              exact
              path="/details/:detailsId"
              component={ProductDetailsPage}
            />

            <Route exact path="/signup">
              {props.isLoggedIn ? <Private /> : <Signup />}
            </Route>
            <Route exact path="/login">
              {" "}
              {props.isLoggedIn ? <Private /> : <Login />}
            </Route>

            <Route exact path="/profile">
              {props.isLoggedIn ? <Profile /> : <Login />}
            </Route>

            <Route exact path="/private" component={Private}>
              {props.isLoggedIn ? <Private /> : <Login />}
            </Route>

            <PrivateRoute exact path="/stripe" component={Stripe} />
            <PrivateRoute exact path="/success" component={PaymentSuccess} />
            <Route exact path="/cart">
              {props.isLoggedIn ? <ShoppingCart /> : <Login />}
            </Route>
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
