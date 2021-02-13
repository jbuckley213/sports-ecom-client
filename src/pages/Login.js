import React, { useState } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./../styles/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter, Link } from "react-router-dom";
import { MoblieAction } from "./../styles/login";
import { connect } from "react-redux";
import { getCart } from "./../actions/cartActions";
import GoogleLogin from "react-google-login";
import authService from "../lib/auth-service";
import { FormSideBar } from "./../styles/checkout";
import LoginForm from "./../components/LoginForm";
import Signup from "./Signup";

function Login(props) {
  // state = { username: "", password: "" };
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    // Call funciton coming from AuthProvider ( via withAuth )
    props.getCart();
    props.login(email, password);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        // width: "25ch",
        width: "40ch",
      },
    },
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const duration = 1;

  const containerVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        // type: "spring",
        // stiffness: 90,
        // staggerChildren: 0.07,
        // delayChildren: 0.2,
      },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,

      transition: {
        duration: 0.5,
        // staggerChildren: 0.05,
        // staggerDirection: -1,
      },
    },
    exit: {
      x: "+100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const formValidation = () => {
    const values = Object.values(inputs);
    let valid = false;
    values.forEach((value) => {
      if (value === "") {
        valid = true;
      }
    });
    return valid;
  };

  const inputValidation = (value) => {
    if (value === "") {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmitValidation = () => {
    console.log("called");
    setError(formValidation());
  };

  const handleLogin = async (googleData) => {
    props.googleLogin(googleData);
    // authService
    //   .googleLogin(googleData)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));

    // const res = await fetch("http://localhost:5000/auth/api/v1/auth/google", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
  };

  const variantHone = {
    hidden: {
      x: "0",
      backgroundColor: "#8BA8E2",
      transition: { duration: duration },
    },
    visible: {
      // x: "20vw",
      x: "30vw",
      backgroundColor: "#BED8A5",

      transition: { duration: duration },
    },
  };
  const variantLoginForm = {
    hidden: {
      x: "0",
      opacity: 1,
      transition: { duration: duration },
      // zIndex: -1,

      applyAtStart: {
        display: "block",
      },
      // applyAtEnd: {
      //   zIndex: -1,
      // },
    },
    visible: {
      // zIndex: -1,

      applyAtEnd: {
        display: "none",
      },
      opacity: 0,
      x: "-3vw",
      transition: { duration: duration },
    },
  };
  const variantSignupForm = {
    hidden: {
      applyAtEnd: {
        display: "none",
      },
      zIndex: -1,

      opacity: 0,
      x: "8vw",
      // x: "40vw",

      transition: { duration: duration },
    },
    visible: {
      // x: "20vw",
      x: "0",
      opacity: 1,
      transition: { duration: duration },

      applyAtEnd: {
        display: "block",
      },
    },
  };

  const variantInfoSignup = {
    hidden: {
      x: "10vw",
      opacity: 0,
      transition: { duration: duration },
    },
    visible: {
      opacity: 1,

      transition: { duration: duration },
      x: 0,
    },
  };

  const variantInfoLogin = {
    hidden: {
      x: "-10vw",
      opacity: 0,
      zIndex: -1,
      transition: { duration: duration },
    },
    visible: {
      opacity: 1,
      zIndex: 1,

      transition: { duration: duration },
      x: 0,
    },
  };
  const handleClick = () => {
    console.log("hey");
    setIsOpen(!isOpen);
  };
  const { email, password } = inputs;
  const classes = useStyles();
  return (
    <motion.div
      className="login"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <ArrowBackIcon onClick={() => props.history.goBack()} /> */}
      <motion.div
        className="signup-form-index"
        variants={variantSignupForm}
        animate={isOpen ? "visible" : "hidden"}
      >
        {" "}
        <Signup />
      </motion.div>
      <motion.div
        className="login-divider"
        variants={variantHone}
        animate={isOpen ? "visible" : "hidden"}
      >
        <FormSideBar left="0">
          <motion.div
            className="login-title signup-info"
            variants={variantInfoLogin}
            animate={isOpen ? "hidden" : "visible"}
          >
            <h1>Welcome Back!</h1>
            <h5>Enter your details to stay connected</h5>
            <button onClick={handleClick}>Sign up here</button>
          </motion.div>
          <motion.div
            className="login-title"
            variants={variantInfoSignup}
            animate={isOpen ? "visible" : "hidden"}
          >
            <h1>Hello!</h1>
            <h5>Enter your details to start shopping!!</h5>
            <div>
              <button onClick={handleClick}>Login here</button>
            </div>
          </motion.div>
        </FormSideBar>
      </motion.div>

      <motion.div
        className="form-index"
        variants={variantLoginForm}
        animate={isOpen ? "visible" : "hidden"}
      >
        <h1>Login</h1>
        <LoginForm />
        <GoogleLogin
          className="google-login"
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
          theme="light"
        />
        {props.loginFailed && <p>Incorrect password or Email</p>}
      </motion.div>
      <MoblieAction>
        {props.loginFailed && <p>Incorrect password or Email</p>}
        <p>Want to create an account?</p>
        <Link to={"/signup"}> Signup</Link>
      </MoblieAction>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => {
      dispatch(getCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(withAuth(Login)));
