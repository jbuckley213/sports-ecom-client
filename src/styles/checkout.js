import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div``;

export const ProgressBar = styled.div`
  width: 90%;
  height: 30%;
  background-color: white;
  /* border: 1px solid rgb(228, 103, 46); */
  display: flex;
  /* clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%); */
  border-radius: 25px;
  margin: 10px auto;
  position: relative;
  top: 20px;
`;

export const ProgressItem = styled.div`
  ${(props) =>
    css`
      flex: 1;
      padding: 10px;

      border-radius: 25px;
      text-align: center;
      background-color: rgb(${(props) => props.background});
      color: rgb(${(props) => props.color});
    `}
`;

export const Info = styled.p`
  color: white;
  text-align: center;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: white;
  width: 70%;
  margin: 50px auto;
  border-radius: 20px;
  padding: 20px 10px;
`;

export const AddressContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  background: white;
  margin: 10px 0;

  h3 {
    text-align: center;
  }
`;

export const DetailsContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  background: white;
  margin: 10px 0;

  h3 {
    text-align: center;
  }
`;

export const AddressLine = styled.p`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #444;
  padding: 2px 0;
`;

export const Price = styled.div`
  border-top: 1px solid #444;
  padding: 10px;
`;

export const PayNow = styled.div`
  margin: 0 auto;
  width: 100px;
`;

export const inputContainers = styled.div``;
