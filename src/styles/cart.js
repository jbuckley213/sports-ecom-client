import styled, { css } from "styled-components";

export const CartButton = styled.div`
  display: none;
  position: absolute;
  left: 95vw;
  top: 4%;
  z-index: 3;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  @media (min-width: 1023px) {
    display: flex;
  }
`;

export const DisplayName = styled.div`
  position: fixed;
  left: 200px;
  top: 30px;
`;

export const CartContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0;
`;

export const ImageContainer = styled.div`
  ${() =>
    css`
   width:40%;

 img{ width: 100%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;

  
`}
`;

export const DetailsContainer = styled.div`
  width: 40%;
`;

export const ProductTitle = styled.h3``;

export const CheckoutContainer = styled.div`
  display: flex;
  width: auto;
  padding: 30px 120px;
  float: right;
`;
