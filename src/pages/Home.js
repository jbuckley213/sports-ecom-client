import axios from "axios";
import React, { useState, useEffect } from "react";
import productService from "./../lib/product-service";
import ProductCard from "./../components/ProductCard/ProductCard";
import ProductDetails from "./../components/ProductDetails/ProductDetails";

import { connect } from "react-redux";
import { getCart } from "./../actions/cartActions";
import { Link } from "react-router-dom";
import { ProductCardGrid } from "./../styles/product-card";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { withAuth } from "./../context/auth-context";
import Login from "./Login";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDeatils, setProductDetails] = useState({});
  const [showLogin, setShowLogin] = useState(false);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  const containerVariantLogin = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  useEffect(() => {
    productService.getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const toggleProductDetails = (product) => {
    setShowProductDetails(!showProductDetails);
    setProductDetails(product);
  };

  const showLoginToUser = () => {
    console.log("hey");
    setShowLogin(true);
  };
  const hideLoginToUser = () => {
    console.log("hey");
    setShowLogin(false);
  };

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

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Home Page</h1>
      <Link to="/cart">Your Shopping Cart</Link>
      <Link to="/login">Login</Link>
      <ProductCardGrid>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                eventClick={toggleProductDetails}
                key={product._id}
                product={product}
                numberToCurrency={handleNumberDecimal}
              />
            );
          })}
      </ProductCardGrid>

      <AnimatePresence>
        {showProductDetails && (
          <motion.div
            className="product-details"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", duration: 1, when: "beforeChildren" }}
          >
            <div className="detail-div">
              <AnimatePresence>
                {!showLogin && (
                  <ProductDetails
                    product={productDeatils}
                    numberToCurrency={handleNumberDecimal}
                    toggleProductDetails={toggleProductDetails}
                    showLogin={showLoginToUser}
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showLogin && (
                  <motion.div
                    variants={containerVariantLogin}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Login goBack={hideLoginToUser} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* {showLogin && <Login />} */}
      </AnimatePresence>
    </motion.div>
  );
}

export default withAuth(Home);
