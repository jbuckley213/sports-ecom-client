import styled, { css } from "styled-components";

export const ReviewProductContainer = styled.div`
  /* width: 340px; */
  width: ${(props) => props.width};
  border-radius: 20px;
  /* background: white; */
  padding: 15px;
  margin: 10px auto;
  @media (min-width: 1023px) {
    width: 600px;
  }
`;

export const ReviewItem = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const ReviewImageContainer = styled.div`
  ${(props) =>
    css`
    display:flex;
  width: 60px;
  height: 60px;
  flex:1;
  margin:auto 0;

  h5{
    
  }
 
    @media (min-width: 1023px) {
        width: 100px;
  height:90px;
 
        }

  img{
    width:90%;
    height:auto;
    object-fit: contain;
  `}
`;

export const ProductHeader = styled.div`
  display: flex;
  border-bottom: 1px solid grey;

  p {
    color: grey;
    flex: 1;
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const InfoContainer = styled.div`
  width: 330px;
  margin: auto auto;
  flex: 1;

  p {
    text-align: center;
    font-size: 0.8rem;
  }
  h5 {
  }
  @media (min-width: 1023px) {
    /* display: */
  }
`;

export const PayPalContainer = styled.div`
  width: 400px;
`;
