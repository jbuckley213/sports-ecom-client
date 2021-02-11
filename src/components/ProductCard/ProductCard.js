import React from "react";
import {
  ProductCardLayout,
  TruePrice,
  PriceContainer,
  TestDiv,
  DetailsImageContainer,
} from "./../../styles/product-card";

function ProductCard(props) {
  const product = props.product;
  // {/* <div className="image-container"> */}
  return (
    <ProductCardLayout>
      {product.sale ? (
        <div className="image-container">
          <img src={product.image} alt="product" />
          <p>Sale</p>
        </div>
      ) : (
        <img src={product.image} alt="product" />
      )}
      <h3>{product.name}</h3>

      <PriceContainer>
        {product.sale && (
          <p className="old-price">
            &euro;{props.numberToCurrency(product.oldPrice)}
          </p>
        )}
        <TruePrice>&euro;{props.numberToCurrency(product.price)}</TruePrice>
      </PriceContainer>
    </ProductCardLayout>
  );
}

export default ProductCard;
