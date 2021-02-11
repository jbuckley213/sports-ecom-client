import React, { useState, useEffect } from "react";
import productService from "./../lib/product-service";
import { ProgressBar, ProgressItem } from "./../styles/checkout";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { emptyCart } from "./../actions/cartActions";
import { SuccessContainer, MessageContainer } from "./../styles/success";

function PaymentSuccess(props) {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    getSuccessMessage();
  }, []);

  const getSuccessMessage = () => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      setSuccess(true);
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (success === true) {
      props.emptyCart();
    }
  }, [success]);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  // delete redux store
  const handleCart = () => {
    productService.changeCart().then((data) => {
      console.log(data);
    });
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {success && (
        <React.Fragment>
          <ProgressBar>
            <ProgressItem color="139, 168, 226" background="255, 255, 255">
              Your Details
            </ProgressItem>
            <ProgressItem color="139, 168, 226" background="255, 255, 255">
              Review
            </ProgressItem>
            <ProgressItem color="255, 255, 255" background="139, 168, 226">
              Success
            </ProgressItem>
          </ProgressBar>
          <SuccessContainer>
            <h1 onClick={props.emptyCart}>Thank You For Your Order</h1>
          </SuccessContainer>
        </React.Fragment>
      )}

      <MessageContainer>
        <p>{message}</p>
      </MessageContainer>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {
      dispatch(emptyCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(PaymentSuccess);
