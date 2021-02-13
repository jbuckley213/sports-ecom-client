import React, { useState, useEffect } from "react";
import ReviewCartList from "./../components/ReviewCartList";
import {
  ReviewContainer,
  Price,
  PayNow,
  DetailsContainer,
} from "./../styles/checkout";
import {
  ReviewProductContainer,
  ProductHeader,
} from "./../styles/product-review";
import { loadStripe } from "@stripe/stripe-js";
import { ProgressBar, ProgressItem } from "./../styles/checkout";
import { motion } from "framer-motion";
import { Button } from "./../styles/button";
import paymentService from "./../lib/payment-service";
import ReviewCart from "./../components/ReviewCart";
import AddressReview from "./../components/AddressReview";
import PayPal from "./../components/PayPal";
import { withRouter } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51IBgegFmgEKSMttvbJS0troDCWkHcpkFlS9n6kFzNvWyoKkSekYs45Ty53Sy6YbDerQNXvCCYpXrVMOQR7GcYpl0001rk9IfxI"
);

function Review(props) {
  const [user, setUser] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [user]);

  const getUserDetails = () => {
    paymentService
      .getUser()
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.log(err));
  };
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, duration: 0.5 },
    },
    exit: {
      x: "+100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const calculateTotal = () => {
    if (user.cart) {
      let total = user.cart.reduce((total, item) => {
        total += item.product.price * item.quantity;
        return total;
      }, 0);
      total = total + 10;
      setTotalPrice(total);
    }
  };

  const makePayment = async (event) => {
    console.log("clicked");
    const stripe = await stripePromise;

    paymentService
      .processPayment()
      .then((response) => {
        console.log("RESPONSE", response);
        const { id } = response;
        return stripe.redirectToCheckout({
          sessionId: id,
        });
      })
      .then((result) => {
        console.log("results", result);
        props.history.push("/success/?success=true");
      })
      .catch((err) => console.log(err));
  };

  console.log("price total", totalPrice);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProgressBar>
        <ProgressItem color="139, 168, 226" background="255, 255, 255">
          Your Details
        </ProgressItem>
        <ProgressItem color="255, 255, 255" background="139, 168, 226">
          Review
        </ProgressItem>
        <ProgressItem color="139, 168, 226" background="255, 255, 255">
          Success
        </ProgressItem>
      </ProgressBar>

      <div className="review-container">
        <div>
          <ReviewContainer>
            {user.address && <AddressReview address={user.address} />}
            <DetailsContainer>
              <h5>Your Details</h5>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </DetailsContainer>
          </ReviewContainer>
        </div>
        <div className="price-container">
          <PayPal price={totalPrice} />
          <PayNow>
            <button onClick={makePayment}>
              Pay with <span>STRIPE</span>
            </button>
          </PayNow>

          <ReviewCartList
            width="340px"
            cart={user.cart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default withRouter(Review);
