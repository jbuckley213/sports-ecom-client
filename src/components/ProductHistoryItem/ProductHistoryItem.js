import React from "react";
import {
  Container,
  ImageContainer,
  TextContainer,
} from "./../../styles/product-history";

function ProductHistoryItem(props) {
  return (
    <Container>
      <ImageContainer>
        <img src={props.product.image} />
      </ImageContainer>
      <TextContainer>
        <p>{props.product.name}</p>
        <p>{props.quantity}</p>
      </TextContainer>
    </Container>
  );
}

export default ProductHistoryItem;
