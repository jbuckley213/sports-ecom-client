import styled, { css } from "styled-components";

export const ProductCardLayout = styled.div`
  ${() =>
    css`
    width:250px;
    height:auto;
    ${"" /* border: 1px solid black; */}

   margin:20px; 
   border-radius:10px;
   padding:10px;
   box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);  
         
  
  img{
      width:100%;
      height:auto;
      margin:0 auto;

        
         ${
           "" /* box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);  */
         }
        
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
    justify-content:center;
    
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
  ${(props) =>
    css`
    width:95%;
    display:flex;
    align-items:center;
    padding: 10px;
    @media (min-width: 1023px) {
      width: 95%;
      justify-content:space-evenly;
      
  }
    .img-div{
        width:90%;
        @media (min-width: 1023px) {
      width: ${(props) => props.width};
        }
  }
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
  @media (min-width: 1023px) {
      ${"" /* width: 50%; */}
      margin:0 auto;
      
  }
    }
    .cart-details{
        width:90%;
        padding:10px;
        @media (min-width: 1023px) {
          width: ${(props) => props.width};
      }
  }
    }
    h2{
        font-size:1rem;
        width:100%;
    `}
`;

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: red;
  z-index: 1;
`;

export const ProductSideNav = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: block;
  }
`;

export const HeaderImage = styled.div`
  ${(props) =>
    css`
  
  padding: 10px;
  width: 85%;
  position: relative;
  
  height: 18vh;
  margin-bottom: 10px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 40% 40%;
  margin: 0 auto;
  padding-top:30px;
  @media (min-width: 1023px) {
    left:6%;
  }
  h1{
    text-align:center;
    text-transform:uppercase;
    color:white;
    letter-spacing:3px;
  `}
`;
