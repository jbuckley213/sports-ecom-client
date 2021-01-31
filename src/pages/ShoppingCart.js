import React from "react";
import { connect } from "react-redux";
import ProductCart from "./../components/ProductCart/ProductCart";
import DeleteIcon from "@material-ui/icons/Delete";

function ShoppingCart(props) {
  let total = 10;

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

  return (
    <div>
      <h1>ShoppingCart</h1>

      {props.cart.map((product) => {
        total += product.quantity * product.price;
        return (
          <div key={product._id}>
            <ProductCart
              handleNumberDecimal={handleNumberDecimal}
              product={product}
            />
          </div>
        );
      })}
      {props.cart.length === 0 ? (
        <p>There are no items in your cart</p>
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
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);