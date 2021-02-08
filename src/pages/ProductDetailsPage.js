import React, { useState, useEffect } from "react";
import {
  DetailsContainer,
  DetailsImageContainer,
  InfoContainer,
  Actions,
  Price,
  AddToCart,
} from "./../styles/product-details";
import { ShopButton } from "./../styles/landing";
import { connect } from "react-redux";
import { addProductToCart, addProduct } from "./../actions/cartActions";
import { Link } from "react-router-dom";

import productService from "./../lib/product-service";
import { motion } from "framer-motion";
import Quantity from "./../components/Quantity/Quantity";
import { Button } from "./../styles/button";
import { withAuth } from "./../context/auth-context";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReturnButton } from "../styles/login";

function ProductDetailsPage(props) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);

  const totalQuantity = (total) => {
    return total * quantity;
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleClick = (product) => {
    //props.addProductToCart(product);
    if (props.user !== null) {
      props.addProduct(product, quantity);
      setSuccess(true);
    } else {
      // setShowLogin(true);
      props.showLogin();
    }
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
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

  const handleDecrement = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const successAnimation = () => {
    return (
      <>
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </>
    );
  };

  const cartOrLogin = () => {
    return props.user === null ? (
      <Link to="/signup">
        <Button>Add To Cart</Button>
      </Link>
    ) : (
      <Button
        onClick={() => {
          handleClick(product);
        }}
      >
        Add To Cart
      </Button>
    );
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const getProduct = () => {
    const productId = props.match.params.detailsId;
    productService
      .getProduct(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DetailsContainer>
        <ArrowBackIcon onClick={() => props.history.goBack()} />

        <DetailsImageContainer>
          <img src={product.image} />
        </DetailsImageContainer>
        <InfoContainer>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Actions>
            <Price>
              {product.sale && (
                <h5>
                  {" "}
                  &euro;
                  {handleNumberDecimal(totalQuantity(product.oldPrice))}
                </h5>
              )}
              <h4>
                {" "}
                &euro;
                {product.price &&
                  handleNumberDecimal(totalQuantity(product.price))}
              </h4>
            </Price>
            <AddToCart>
              <Quantity
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                quantity={quantity}
              />

              {success ? successAnimation() : cartOrLogin()}
            </AddToCart>
            {success && <Button>Go To Checkout</Button>}
          </Actions>
        </InfoContainer>
      </DetailsContainer>
      <div className="space"></div>
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
    addProductToCart: (product) => {
      dispatch(addProductToCart(product));
    },
    addProduct: (product, quantity) => {
      console.log("quantity", quantity);
      dispatch(addProduct(product, quantity));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withAuth(ProductDetailsPage)));
