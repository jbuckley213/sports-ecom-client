import React from "react";
import { ProductCartLayout } from "./../../styles/product-card";
import { connect } from "react-redux";
import {
  deleteProductFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./../../actions/cartActions";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { motion } from "framer-motion";

function ProductCart(props) {
  const handleDelete = (id) => {
    props.deleteProductFromCart(id);
  };

  const handleIncrease = (product) => {
    props.increaseQuantity(product);
  };

  const handleDecrease = (product) => {
    if (product.quantity === 1) {
      return;
    }
    props.decreaseQuantity(product);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "-100vw" }}
      transition={{ type: "spring" }}
    >
      <ProductCartLayout width={props.width}>
        <div className="img-div">
          <img src={props.product.image} />
          <div className="background-div"></div>
        </div>
        <div className="cart-details">
          <DeleteIcon onClick={() => handleDelete(props.product._id)} />

          <h2>{props.product.name}</h2>
          <p className="quantity">Quantity {props.product.quantity}</p>
          <div className="price">
            &euro;{props.handleNumberDecimal(props.product.price)}
            <AddIcon onClick={() => handleIncrease(props.product)} />
            {props.product.quantity}
            <RemoveIcon onClick={() => handleDecrease(props.product)} />
          </div>
        </div>
      </ProductCartLayout>
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductFromCart: (id) => {
      dispatch(deleteProductFromCart(id));
    },
    increaseQuantity: (id) => {
      dispatch(increaseQuantity(id));
    },
    decreaseQuantity: (id) => {
      dispatch(decreaseQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
