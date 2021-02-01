import { LineStyleOutlined } from "@material-ui/icons";
import styled, { css } from "styled-components";

export const DetailsContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  justify-content: center;

  @media (min-width: 1023px) {
    padding: 0;
  }
`;

export const DetailsImageContainer = styled.div`
  ${(props) =>
    css`
    
  width: 340px;
  height: 340px;
 
    @media (min-width: 1023px) {
        width: 40%;
  height: 50%;
  position: relative;
    left: 50px;
    z-index: -1;
    top: 70px;
        }

  img{
    width:100%;
    height:auto;
  `}
`;

export const InfoContainer = styled.div`
  width: 340px;
  height: 340px;
  @media (min-width: 1023px) {
    width: 50%;
    height: 50%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Price = styled.h4`
  width: 200px;
`;

export const AddToCart = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
  }
`;
