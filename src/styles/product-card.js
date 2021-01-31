import styled, { css } from "styled-components";

export const ProductCardLayout = styled.div`
  ${() =>
    css`
    width:100%;
    background-color:rgb(237, 237, 237);
    height:auto;
   margin:10px;
  
  img{
      width:100%;
      height:auto;
      margin:0 auto;
   
        box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius:5px;
    
  }
  h3{
      margin:30px 0;
      font-size:1rem;
      width:90%;
  }
  p {
    color: #444;
`}
`;

export const ProductCardGrid = styled.div`
  ${() =>
    css`
    width:100%;
    height:auto;
    
    display:flex;
    flex-wrap: wrap;
    
  p {
    color: #444;
`}
`;

export const ProductDetailsLayout = styled.div`
  ${() =>
    css`
   width:100%;
   background: #eef2f7;
   height:90vh;
    padding:15px;
    ${"" /* border:1px solid #444;
    border-radius:5px;  */}
    overflow:auto;
    img{
        width:70%;
        margin:0 15%;
        box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius:5px;
    }
    h3{
    font-weight:700;

    }
   h4{
       margin:0px 0px;
       font-weight:500;
   }
  
  p {
    color: #444;
    font-size:0.9rem;
    font-weigth:400;
   
    transition: all ease-in-out 300ms;
`}
`;

export const ProductCartLayout = styled.div`
  ${() =>
    css`
    width:95%;
    display:flex;
    align-items:center;
    padding: 10px;
    
    .img-div{
        width:90%;
    }
    img{
        width:100%;
        box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius:5px;
    }
    .cart-details{
        width:90%;
        padding:10px;
    }
    h2{
        font-size:1rem;
        width:100%;
    `}
`;
