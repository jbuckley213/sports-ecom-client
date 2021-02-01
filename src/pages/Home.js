import axios from "axios";
import React, { useState, useEffect } from "react";
import productService from "./../lib/product-service";
import ProductCard from "./../components/ProductCard/ProductCard";
import ProductDetails from "./../components/ProductDetails/ProductDetails";
import ProductNav from "./../components/ProductNav";

import { ImageHeaderContainer } from "./../styles/landing";
import { connect } from "react-redux";
import { getCart } from "./../actions/cartActions";
import { Link } from "react-router-dom";
import { ProductCardGrid, HeaderImage } from "./../styles/product-card";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { withAuth } from "./../context/auth-context";
import Login from "./Login";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDeatils, setProductDetails] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [headerImage, setHeaderImage] = useState("");

  const containerVariant = {
    hidden: {
      opacity: 0,
      y: "10vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  const detailsVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        type: "spring",
        duration: 1,
      },
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
      transition: { ease: "easeInOut", duration: 0.4 },
    },
  };

  useEffect(() => {
    productService.getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  useEffect(() => {
    filterItems();
  }, [products]);

  useEffect(() => {
    handleImage();
  }, [filteredProducts]);

  const toggleProductDetails = (product) => {
    setShowProductDetails(!showProductDetails);
    setProductDetails(product);
  };

  const showLoginToUser = () => {
    setShowLogin(true);
  };
  const hideLoginToUser = () => {
    setShowLogin(false);
  };

  const filterItems = () => {
    const searchTerm = props.match.params.search;
    if (searchTerm === "all") {
      setFilteredProducts(products);
      return;
    }
    const productListFiltered = products.filter((product) => {
      if (product.category === searchTerm) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(productListFiltered);
  };

  const handleImage = () => {
    const searchTerm = props.match.params.search;

    switch (searchTerm) {
      case "all":
        setHeaderImage("/hike.jpg");
        break;
      case "men":
        setHeaderImage("/menshoe.jpg");
        break;
      case "woman":
        setHeaderImage("/swimmer.jpg");
        break;
      case "fitness":
        setHeaderImage("/fitness.jpg");
        break;
    }
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
      className="products-container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderImage image={headerImage}>
        <h1>{props.match.params.search}</h1>
      </HeaderImage>
      <div className="home-container">
        <ProductNav />
        <motion.div
          className="products-container"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* <h1>Home Page</h1>
          <Link to="/cart">Your Shopping Cart</Link> */}
          <ProductCardGrid>
            {filteredProducts &&
              filteredProducts.map((product) => {
                return (
                  <Link className="nav-link" to={`/details/${product._id}`}>
                    <ProductCard
                      eventClick={toggleProductDetails}
                      key={product._id}
                      product={product}
                      numberToCurrency={handleNumberDecimal}
                    />
                  </Link>
                );
              })}
          </ProductCardGrid>
          <AnimatePresence>
            {showProductDetails && (
              <motion.div
                className="product-details"
                variants={detailsVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="detail-div">
                  <AnimatePresence exitBeforeEnter>
                    {!showLogin && (
                      <ProductDetails
                        product={productDeatils}
                        numberToCurrency={handleNumberDecimal}
                        toggleProductDetails={toggleProductDetails}
                        showLogin={showLoginToUser}
                      />
                    )}
                  </AnimatePresence>
                  <AnimatePresence exitBeforeEnter>
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
      </div>
    </motion.div>
  );
}

export default withAuth(Home);
