import React, { useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import paymentService from "./../lib/payment-service";
import { withAuth } from "./../context/auth-context";
import productService from "../lib/product-service";

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

  return (
    <React.Fragment>
      <div>
        <h1>Private Route</h1>
        <h2>Welcome {props.user && props.user.username}</h2>

        <p style={{ float: "right" }} onClick={makePayment}>
          Buy Now
        </p>

        <Link to="/stripe">Stripe Payment</Link>
      </div>
      <div>{message}</div>

      <button onClick={handleCart}>Change cart</button>
    </React.Fragment>
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
