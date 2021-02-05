import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productService from "./../lib/product-service";
import React, { useState, useEffect } from "react";
import ProductCard from "./../components/ProductCard/ProductCard";
import {
  LandingContainer,
  ImageHeaderContainer,
  ImageContainer,
  Title,
  TitleHeader,
  Header,
  Divider,
  Info,
  ShopButton,
} from "./../styles/landing";

function Landing() {
  const [products, setProducts] = useState([]);

  const handleNumberDecimal = (number) => {
    let numberDecimalSplit = number.toString().split(".");
    if (numberDecimalSplit.length === 1) {
      numberDecimalSplit.push("00");
      return numberDecimalSplit.join(".");
    }
    if (numberDecimalSplit[1].length === 1) {
      let oneDigitDecimal = numberDecimalSplit[1];
      numberDecimalSplit.pop();
      numberDecimalSplit.push(`${oneDigitDecimal}0`);
      return numberDecimalSplit.join(".");
    } else {
      return number;
    }
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
      // x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.5, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  const listItem = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { duration: 1 } },
  };
  useEffect(() => {
    handleProducts();
  }, []);

  const handleProducts = () => {
    productService.getAllProducts().then((data) => {
      setProducts(data);
      console.log(data);
    });
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header>
        <motion.div className="header-info" variants={listItem}>
          <TitleHeader>Welcome To SportHub</TitleHeader>
          <Divider />
          <Info>Buy active gear at a reasonable price.</Info>
          <Link to="/home/all">
            <ShopButton>Shop Now</ShopButton>
          </Link>
        </motion.div>
        <ImageHeaderContainer image={"/hike.jpg"}>
          <h1 className="moblie-title">Welcome To SportHub</h1>
          <div className="moblie-title">
            <ShopButton>Shop Now</ShopButton>
          </div>
        </ImageHeaderContainer>
      </Header>{" "}
      <LandingContainer>
        <ImageContainer image="/swimmer.jpg" color="139, 168, 226">
          <Title>Best Prices</Title>
        </ImageContainer>
        {/* {products[0] && (
          <ProductCard
            product={products[0]}
            numberToCurrency={handleNumberDecimal}
          />
        )} */}
        {products[0] && (
          <ImageContainer image={products[0].image} color="176, 227, 232">
            <Title>&euro;{handleNumberDecimal(products[0].price)}</Title>
          </ImageContainer>
        )}

        <ImageContainer image="/men.jpg" color="226, 169, 146">
          <Title>For Men</Title>
        </ImageContainer>
        {products[0] && (
          <ImageContainer image={products[1].image} color="176, 227, 232">
            <Title>&euro;{handleNumberDecimal(products[1].price)}</Title>
          </ImageContainer>
        )}
        {products[0] && (
          <ImageContainer image={products[2].image} color="176, 227, 232">
            <Title>&euro;{handleNumberDecimal(products[2].price)}</Title>
          </ImageContainer>
        )}
        <ImageContainer image="/handstand.jpg" color="226, 169, 146">
          <Title>For Women</Title>
        </ImageContainer>
        {products[0] && (
          <ImageContainer image={products[3].image} color="176, 227, 232">
            <Title>&euro;{handleNumberDecimal(products[3].price)}</Title>
          </ImageContainer>
        )}
        <ImageContainer image="/fitness.jpg" color="190, 216, 165">
          <Title>For Fitness</Title>
        </ImageContainer>
      </LandingContainer>
    </motion.div>
  );
}

//176, 227, 232

export default Landing;
