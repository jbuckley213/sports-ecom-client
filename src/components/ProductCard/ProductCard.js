import React from "react";
import { ProductCardLayout } from "./../../styles/product-card";

function ProductCard(props) {
  const product = props.product;
  return (
    <ProductCardLayout onClick={() => props.eventClick(product)}>
      <img src={product.image} alt="product" />
      <h3>{product.name}</h3>
      <p>&euro;{props.numberToCurrency(product.price)}</p>
    </ProductCardLayout>
  );
}

export default ProductCard;
