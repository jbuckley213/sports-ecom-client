import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { PayPalContainer } from "./../styles/product-review";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PayPal(props) {
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: props.price,
            },
          },
        ],
      })
      .catch((err) => console.log(err.err));
  };

  const onApprove = (data, actions) => {
    console.log("data", data);
    // console.log("actions", actions.order.get());
    return actions.order.capture().then(() => {
      props.history.push("/success/?success=true");
    });
  };

  // .then(() => {
  //   props.history.push(`success/?success=true`);
  // });
  const style = {
    color: "blue",
    shape: "pill",
    label: "pay",
    height: 40,
    layout: "horizontal",
  };

  return (
    <PayPalContainer>
      <PayPalButton
        className="paypal"
        style={style}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalContainer>
  );
}

export default withRouter(PayPal);
