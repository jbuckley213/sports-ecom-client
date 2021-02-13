import React, { useState, useEffect } from "react";
import {
  ReviewProductContainer,
  ProductHeader,
} from "./../styles/product-review";
import { Price } from "./../styles/checkout";
import ReviewCart from "./ReviewCart";

function ReviewCartList(props) {
  const { cart, totalPrice, width } = props;

  console.log("Price", totalPrice);
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

  console.log(cart);
  return (
    <ReviewProductContainer width={width}>
      <ProductHeader>
        <p>Item</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </ProductHeader>
      {cart &&
        cart.map((item) => {
          return (
            <ReviewCart
              handleNumberDecimal={handleNumberDecimal}
              product={item.product}
              quantity={item.quantity}
            />
          );
        })}
      <Price>
        <div className="totals">
          <div>
            <h5>Sub Total:</h5>{" "}
            {totalPrice && <p>&euro;{handleNumberDecimal(totalPrice - 10)}</p>}
          </div>
          <div>
            <h5>Shipping:</h5> <p>&euro;10.00</p>
          </div>
          <div className="final-total">
            <h5>Total:</h5>
            {totalPrice && <p>&euro;{handleNumberDecimal(totalPrice)}</p>}
          </div>
        </div>
      </Price>
    </ReviewProductContainer>
  );
}

export default ReviewCartList;
