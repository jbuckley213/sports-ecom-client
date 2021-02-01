import React, { useState, useEffect } from "react";
import { ProductDetailsLayout } from "./../../styles/product-card";
import { Button } from "./../../styles/button";
import { connect } from "react-redux";
import { addProductToCart, addProduct } from "./../../actions/cartActions";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Collapse } from "react-bootstrap";
import Quantity from "./../Quantity/Quantity";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import Login from "./../../pages/Login";
// import Button from "react-bootstrap/Button";

function ProductDetails(props) {
  const [showMore, setShowMore] = useState(false);
  const [lessText, setLessText] = useState("");
  const [moreText, setMoreText] = useState("");
  const [success, setSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const product = props.product;

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

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    handleText();
  }, []);

  const handleText = () => {
    const shortText = props.product.description.slice(0, 100);
    const longText = props.product.description;
    setLessText(`${shortText}...`);
    setMoreText(longText);
  };

  let [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const totalQuantity = (total) => {
    return total * quantity;
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
      // x: "-100vw",
    },
    visible: {
      opacity: 1,
      // x: 0,

      transition: { duration: 0.5, when: "afterChildren" },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <ProductDetailsLayout>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={product.image} alt="product" />

        <div>
          <h3>{product.name}</h3>
          <div>
            <h4>Description</h4>
            {showMore ? (
              <RemoveIcon
                onClick={handleShowMore}
                aria-controls="example-collapse-text"
                aria-expanded={showMore}
              />
            ) : (
              <AddIcon onClick={handleShowMore} />
            )}
          </div>

          <Collapse in={showMore}>
            <div id="example-collapse-text">{moreText}</div>
          </Collapse>
          <div className="product-actions">
            <div>
              <p>Price</p>
              <h5>
                &euro;{props.numberToCurrency(totalQuantity(product.price))}
              </h5>
            </div>
            <div>
              <Quantity
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                quantity={quantity}
              />
              <Button
                onClick={() => {
                  handleClick(product);
                }}
              >
                {success ? (
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
                ) : (
                  "Add To Cart"
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </ProductDetailsLayout>
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
)(withAuth(ProductDetails));
