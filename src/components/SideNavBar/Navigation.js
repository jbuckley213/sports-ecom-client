import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import authService from "./../../lib/auth-service";

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

const handleLogout = () => {
  authService.logout().then((response) => console.log(response));
};

export const Navigation = (props) => (
  <motion.ul
    onClick={props.toggle}
    className={props.open ? "" : "nav-close"}
    variants={variants}
  >
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}
    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/">Home</Link>
    </motion.li>

    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="cart">Cart</Link>
    </motion.li>
    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/private">Checkout</Link>
    </motion.li>
    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <p onClick={handleLogout}>Logout</p>
    </motion.li>
    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/login">Login</Link>
    </motion.li>
    <motion.li
      variants={variantsLinks}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/profile">Profile</Link>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
