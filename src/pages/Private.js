import React, { useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import paymentService from "./../lib/payment-service";
import { withAuth } from "./../context/auth-context";
import productService from "../lib/product-service";
import { motion } from "framer-motion";
import EnterDetails from "./../components/EnterDetails";
import {
  CheckoutContainer,
  ProgressBar,
  Info,
  ProgressItem,
} from "./../styles/checkout";

const stripePromise = loadStripe(
  "pk_test_51IBgegFmgEKSMttvbJS0troDCWkHcpkFlS9n6kFzNvWyoKkSekYs45Ty53Sy6YbDerQNXvCCYpXrVMOQR7GcYpl0001rk9IfxI"
);

function Private(props) {
  const [message, setMessage] = useState("");
  const [slide, setSlide] = useState(true);

  const makePayment = async (event) => {
    console.log("clicked");
    const stripe = await stripePromise;

    paymentService
      .processPayment()
      .then((response) => {
        console.log("RESPONSE", response);
        const { id } = response;
        return stripe.redirectToCheckout({ sessionId: id });
      })
      .then((result) => {
        console.log("succes");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleCart = () => {
    productService.changeCart().then((data) => {
      console.log(data);
    });
  };
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

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CheckoutContainer>
        <ProgressBar>
          <ProgressItem color="255, 255, 255" background="139, 168, 226">
            Your Details
          </ProgressItem>
          <ProgressItem color="139, 168, 226" background="255, 255, 255">
            Review
          </ProgressItem>
          <ProgressItem color="139, 168, 226" background="255, 255, 255">
            Success
          </ProgressItem>
        </ProgressBar>
        <EnterDetails />
      </CheckoutContainer>
    </motion.div>
  );
}

export default withAuth(Private);

{
  /* <StripeCheckout
stripeKey="pk_test_51IBgegFmgEKSMttvbJS0troDCWkHcpkFlS9n6kFzNvWyoKkSekYs45Ty53Sy6YbDerQNXvCCYpXrVMOQR7GcYpl0001rk9IfxI"
token={makePayment}
name="Buy React"
amount={product.price * 100}
>
<button>Buy React is just {product.price}$</button>
</StripeCheckout> */
}
