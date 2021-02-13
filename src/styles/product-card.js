import styled, { css } from "styled-components";

export const ProductCardLayout = styled.div`
  ${() =>
    css`
    width:250px;
    height:auto;
    ${"" /* border: 1px solid black; */}

   margin:20px; 
   border-radius:10px;
   background:white;
    z-index:2;
   padding:10px;
   transition:all 0.5s;
   box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12);  
         
    &:hover{
		transform: translateY(10px);
    color:black;
		${"" /* background: rgba(black, 0.6); */}
      &:before{
			  display: block;
    } 
    .button-card{			
      opacity: 1;

    }
    }
		.info{
			opacity: 1;
			transform: translateY(0px);
      }
    
	 &:before{
	 content: ""; 
		position: fixed;
		top: 65%;
		left: 0;
		display: none;
		width: 100%;
		height: 35%;
		border-radius: 10px;
		background: rgba(190, 216, 165, 0.3); 
		z-index: 6;
		transition: 0.5s;
		opacity: 1;
   
  }
  .button-card{
    opacity:0;
    text-align:center;
    background:red;
    z-index:7;

  }
  
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
  mix-blend-mode: multiply;
  z-index:4;


 
    
  }
    .image-container{
    ${
      "" /* background: linear-gradient(
    rgba(176, 227, 232, 0.5),
    rgba(176, 227, 232, 0.5) */
    }
    height:230px;
    z-index:3;
    background: linear-gradient(135deg, #ffffff 5%,   #5cbcb0 5%,  #5cbcb0 15%, #ffffff  15%);
;


    p{
      transform: rotate(320deg);
      position: relative;
      top:-278px;
      right:19px;
      text-decoration:none;
    }
  
  border-radius:5px;
  }
 
  h3{
      margin:30px 0;
      font-size:1rem;
      width:90%;
    font-weight:500;
  }
  .old-price {
    color: #444;
    text-decoration: line-through;
    margin:0 5px;

`}
`;

export const DetailsImageContainer = styled.div`
  height: 230px;

  background: linear-gradient(
    135deg,
    #ffffff 5%,
    #5cbcb0 5%,
    #5cbcb0 15%,
    #ffffff 15%
  );
  z-index: -1;

  border-radius: 5px;

  p {
    transform: rotate(320deg);
    position: relative;
    top: -278px;
    right: 19px;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
    mix-blend-mode: multiply;
    position: relative;
    top: 50px;
    left: 10px;
  }
`;

export const TestDiv = styled.div`
  width: 230px;
  height: 250px;
  z-index: 1;
  background: white;
  position: relative;
  top: -240px;
  left: 8%;
  background: linear-gradient(rgba(226, 169, 146, 1), rgba(226, 169, 146, 1));
`;

export const TruePrice = styled.p`
  color: #444;
  text-decoration: none;
  font-weight: 600;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: left;
  background: white;
  z-index: 1;
`;

export const ImageProductContainer = styled.div`
  width: 350px;
  height: 350px;
  margin: 5px;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}); */
  background: linear-gradient(
    rgba(${(props) => props.color}, 0.5),
    rgba(${(props) => props.color}, 0.5)
  );
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px) scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }
  p {
    position: relative;
    top: -50%;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-align: center;
    color: white;
  }
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
        ${"" /* background:rgba(226, 169, 146); */}
        z-index:2;

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
  mix-blend-mode:multiply; 
  z-index:3;

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

  .background-div{
    width:200px;
    height:200px;
    background:white;
    position:fixed;
    top:-225px;
    left:15px;
    z-index:-1;
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
  display: block;
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

export const CartHeader = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
  }
  a {
    margin: 0 auto;
  }
`;
