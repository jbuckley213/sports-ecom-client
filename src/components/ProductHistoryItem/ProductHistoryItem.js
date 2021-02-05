import React from "react";
import {
  Container,
  ImageContainer,
  TextContainer,
} from "./../../styles/product-history";

function ProductHistoryItem(props) {
  console.log("props", props);
  return (
    <Container>
      <ImageContainer>
        <img src={props.product.image} />
      </ImageContainer>
      <TextContainer>
        <h5>{props.product.name}</h5>
        <p>Quantity: {props.quantity}</p>
      </TextContainer>
    </Container>
  );
}

export default ProductHistoryItem;
