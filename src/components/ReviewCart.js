import React from "react";
import {
  ReviewContainer,
  ReviewItem,
  ReviewImageContainer,
  InfoContainer,
} from "./../styles/product-review";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

function ReviewCart(props) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ReviewItem>
        <ReviewImageContainer>
          <img src={props.product.image} />
        </ReviewImageContainer>

        <InfoContainer>
          <p>{props.product.name}</p>
        </InfoContainer>
        <InfoContainer>
          <p> {props.quantity} </p>
        </InfoContainer>
        <InfoContainer>
          <p> &euro;{props.handleNumberDecimal(props.product.price)}</p>
        </InfoContainer>
        <InfoContainer>
          <p>
            {" "}
            &euro;
            {props.handleNumberDecimal(props.product.price * props.quantity)}
          </p>
        </InfoContainer>
      </ReviewItem>
    </motion.div>
  );
}

export default ReviewCart;
