import React from "react";
import { CartContainer } from "./../../styles/cart";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import ProductCart from "./../ProductCart/ProductCart";
import { Button } from "./../../styles/button";
import { Link, withRouter } from "react-router-dom";
import { ShopButton } from "./../../styles/landing";
// import SideProductCard from "./../SideProductCard/SideProductCard";

const handleNumberDecimal = (number) => {
  let numberDecimalSplit = number.toString().split(".");
  if (numberDecimalSplit.length === 1) {
    numberDecimalSplit.push("00");
    return numberDecimalSplit.join(".");
  }
  if (numberDecimalSplit[1].length === 1) {
    let oneDigitDecimal = numberDecimalSplit[1];
    numberDecimalSplit.pop();
    numberDecimalSplit.push(`${oneDigitDecimal}0`);
    return numberDecimalSplit.join(".");
  } else {
    return number;
  }
};

function SideCart(props) {
  const handleRedirect = () => {
    setTimeout(function () {
      props.toggleCart();
    }, 1000);
    props.history.push("/private");
  };

  let total = 10;

  return (
    <motion.div
      className="cart-slide"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ type: "spring", duration: 1 }}
    >
      <CartContainer>
        {/* <button onClick={props.toggleCart}> Close</button> */}
        {props.cart.map((product) => {
          total += product.quantity * product.price;

          return (
            <div key={product._id}>
              <ProductCart
                width={"50%"}
                handleNumberDecimal={handleNumberDecimal}
                product={product}
              />
            </div>
          );
        })}
        {props.cart.length === 0 ? (
          <p className="no-cart-items">There are no items in your cart</p>
        ) : (
          <div className="totals">
            <div>
              <h5>Sub Total:</h5> <p>&euro;{handleNumberDecimal(total - 10)}</p>
            </div>
            <div>
              <h5>Shipping:</h5> <p>&euro;10.00</p>
            </div>
            <div className="final-total">
              <h5>Total:</h5> <p>&euro;{handleNumberDecimal(total)}</p>
            </div>
            <ShopButton onClick={handleRedirect}>Checkout </ShopButton>
          </div>
        )}
      </CartContainer>
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(withRouter(SideCart));
