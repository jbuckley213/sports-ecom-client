import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div``;

export const ProgressBar = styled.div`
  width: 90%;
  height: 50px;
  background-color: white;
  /* border: 1px solid rgb(228, 103, 46); */
  display: flex;
  /* clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%); */
  border-radius: 25px;
  margin: 50px auto;
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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  padding: 10px 10px;
`;

export const AddressContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  background: white;
  margin: 10px 0;

  h5 {
    border-bottom: 1px dashed #444;
    padding: 10px 0;
  }
`;

export const DetailsContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  background: white;
  margin: 10px 0;

  h5 {
    border-bottom: 1px dashed #444;
    padding: 10px 0;
  }
`;

export const AddressLine = styled.p`
  width: 80%;
  margin: 0;
  padding: 2px 0;
`;

export const Price = styled.div`
  border-top: 1px solid #444;
  padding: 10px;
`;

export const PayNow = styled.div`
  margin: 30px auto;
  width: 100%;
  button {
    margin: 0 auto;
    width: 100%;
    border-radius: 25px;
    height: 40px;
    background-color: white;
    border: none;
    color: rgb(100, 113, 215);
  }
  span {
    font-family: "Archivo Black", sans-serif;
    color: rgb(100, 113, 215);
    font-size: 1.2rem;
  }
`;

export const inputContainers = styled.div``;

export const FormSideBar = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: block;
    /* width: 250px;
    height: 400px; */
    width: 400px;
    height: 600px;
    /* background-color: rgb(190, 216, 165, 1); */
    position: relative;
    left: ${(props) => props.left};
    z-index: 3;
  }
  h1 {
    color: #444;
    @media (min-width: 1023px) {
      color: #eef2f7;
      text-align: center;
      /* margin: 40px 0; */
    }
  }
`;
