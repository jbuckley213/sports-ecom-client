import React, { useState, useEffect } from "react";
import productService from "./../lib/product-service";
import ProductCart from "./../components/ProductCart/ProductCart";
import { withAuth } from "./../context/auth-context";
import ProductHistoryItem from "./../components/ProductHistoryItem/ProductHistoryItem";
import { motion } from "framer-motion";

function Profile(props) {
  const [previousCart, setPreviousCart] = useState([]);

  useEffect(() => {
    getPaymentHistory();
  }, []);

  const getPaymentHistory = () => {
    productService
      .previousCarts()
      .then((data) => {
        setPreviousCart(data);
      })
      .catch((err) => console.log(err));
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
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Purchase History</h1>
      {previousCart.map((item) => {
        return (
          <div key={item.product._id}>
            <ProductHistoryItem
              handleNumberDecimal={handleNumberDecimal}
              product={item.product}
              quantity={item.quantity}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default withAuth(Profile);
