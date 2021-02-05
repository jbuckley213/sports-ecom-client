import React, { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
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

import { Button } from "./../styles/button";
import paymentService from "./../lib/payment-service";
import ReviewCart from "./../components/ReviewCart";
import AddressReview from "./../components/AddressReview";

const stripePromise = loadStripe(
  "pk_test_51IBgegFmgEKSMttvbJS0troDCWkHcpkFlS9n6kFzNvWyoKkSekYs45Ty53Sy6YbDerQNXvCCYpXrVMOQR7GcYpl0001rk9IfxI"
);

function Review() {
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

  const calculateTotal = () => {
    if (user.cart) {
      const total = user.cart.reduce((total, item) => {
        total += item.product.price * item.quantity;
        return total;
      }, 0);

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
        return stripe.redirectToCheckout({ sessionId: id });
      })
      .then((result) => {
        console.log("succes");
      })
      .catch((err) => console.log(err));
  };

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

  console.log(user);
  return (
    <React.Fragment>
      <ProgressBar>
        <ProgressItem color="228, 103, 46" background="255, 255, 255">
          Your Details
        </ProgressItem>
        <ProgressItem color="255, 255, 255" background="228, 103, 46">
          Review
        </ProgressItem>
        <ProgressItem color="228, 103, 46" background="255, 255, 255">
          Success
        </ProgressItem>
      </ProgressBar>
      <ReviewContainer>
        {user.address && <AddressReview address={user.address} />}
        <DetailsContainer>
          <h5>Your Details</h5>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </DetailsContainer>
      </ReviewContainer>
      <ReviewProductContainer>
        <ProductHeader>
          <p>Item</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
        </ProductHeader>
        {user.cart &&
          user.cart.map((item) => {
            return (
              <ReviewCart
                handleNumberDecimal={handleNumberDecimal}
                product={item.product}
                quantity={item.quantity}
              />
            );
          })}
        <Price>
          <p>Total: &euro;{handleNumberDecimal(totalPrice)}</p>
        </Price>
      </ReviewProductContainer>
      <PayNow>
        <Button onClick={makePayment}>Pay Now</Button>
      </PayNow>
    </React.Fragment>
  );
}

export default Review;
