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
  transition: all 0.5s;
  
  
    @media (min-width: 720px) {
       width: 40%;
  height: 50%; 
  
  position: relative;
    left: 50px;
    z-index: -1; 
    top: 70px;
    background: linear-gradient(
    rgba(${(props) => props.color}, 0.4),
    rgba(${(props) => props.color}, 0.8)
  ); 

        }

  img{
    width:100%;
    height:auto;
    
    mix-blend-mode: multiply; 
  


  `}
`;

export const TestDiv = styled.div`
  @media (min-width: 720px) {
    width: 500px;
    height: 450px;
    z-index: -1;
    background: white;
    position: fixed;
    top: 150px;
    left: 13%;
  }
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

export const Price = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 0 5px;
  }
  h5 {
    text-decoration: line-through;
    margin: 0 5px;
  }
`;

export const AddToCart = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 450px;
  }
`;
