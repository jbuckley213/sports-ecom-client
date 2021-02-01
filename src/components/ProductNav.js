import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductSideNav } from "./../styles/product-card";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLinks = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function ProductNav() {
  return (
    <ProductSideNav>
      <motion.ul className="product-nav" variants={variants}>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/home/all` }}>
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/home/men` }}>
            Men
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/home/woman` }}>
            Women
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/home/fitness` }}>
            Fitness
          </Link>
        </motion.li>
      </motion.ul>
    </ProductSideNav>
  );
}

export default ProductNav;
