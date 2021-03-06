import React, { useState, useEffect } from "react";
import productService from "./../lib/product-service";
import ProductCart from "./../components/ProductCart/ProductCart";
import { withAuth } from "./../context/auth-context";
import ProductHistory from "./../components/ProductHistoryItem/ProductHistoryItem";
import { motion } from "framer-motion";
import Axios from "axios";
import { DateContainer } from "./../styles/product-history";
import paymentService from "../lib/payment-service";
import ReviewCartList from "./../components/ReviewCartList";

function Profile(props) {
  const [previousCart, setPreviousCart] = useState([]);

  useEffect(() => {
    console.log("called");
    getPaymentHistory();
  }, []);

  const getPaymentHistory = () => {
    productService
      .previousCarts()
      .then((data) => {
        console.log(data);
        setPreviousCart(data);
      })
      .catch((err) => console.log(err));
  };

  const testEmail = () => {
    paymentService
      .sendMail()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const outputDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toDateString().split(" ").slice(0, 3).join(" ");

    const time = date.toLocaleString().split(" ").reverse()[0].slice(0, 5);
    return day;
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
      {previousCart[0] &&
        previousCart.map((items) => {
          return (
            <DateContainer key={items._id}>
              <p>{outputDate(items.created_at)}</p>
              <ProductHistory
                width="90%"
                handleNumberDecimal={handleNumberDecimal}
                cart={items.items}
              />
            </DateContainer>
          );
        })}

      <button onClick={testEmail}>Test Email</button>
    </motion.div>
  );
}

export default withAuth(Profile);
