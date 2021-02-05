import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";
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

const Navigation = (props) => (
  <motion.ul
    onClick={props.toggle}
    className={props.open ? "" : "nav-close"}
    variants={variants}
  >
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}

    {props.user === null ? (
      <>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/` }}>
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </motion.li>
      </>
    ) : (
      <>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to={{ pathname: `/` }}>
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
          <Link to={{ pathname: `/home/fitness` }} className="nav-link">
            Fitness
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </motion.li>
        <motion.li
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link className="nav-link" to="/private">
            Checkout
          </Link>
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
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </motion.li>
      </>
    )}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export default withAuth(Navigation);
