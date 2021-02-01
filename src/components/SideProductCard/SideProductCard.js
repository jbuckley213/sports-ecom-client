import React from "react";
import {
  ProductContainer,
  ImageContainer,
  DetailsContainer,
} from "./../../styles/cart";

function SideProductCard(props) {
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={props.product.image} alt="product" />
      </ImageContainer>
      <DetailsContainer>
        <h4>{props.product.name}</h4>
      </DetailsContainer>
    </ProductContainer>
  );
}

export default SideProductCard;
