import React, { useState } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import {
  LoginContainer,
  LoginForm,
  LoginButton,
  ReturnButton,
} from "./../styles/login";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./../styles/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCart } from "./../actions/cartActions";
import GoogleLogin from "react-google-login";
import authService from "../lib/auth-service";
import { FormSideBar } from "./../styles/checkout";
import { Opacity } from "@material-ui/icons";

function Login(props) {
  // state = { username: "", password: "" };
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

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
        width: "25ch",
      },
    },
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const containerVariant = {
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 90,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    hidden: {
      x: "-100vw",

      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
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

  const variant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 2, delay: 4 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  const variantHone = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
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
      <ArrowBackIcon onClick={() => props.history.goBack()} />
      {/* <h1>Login</h1> */}
      <FormSideBar left="0">
        <motion.h1 variants={variantHone}>Login</motion.h1>
      </FormSideBar>
      <div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <motion.div variants={variantHone}>
            <TextField
              id="outlined-basic"
              label="Email"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              error={error & inputValidation(email)}
            />
          </motion.div>

          <motion.div variants={variantHone}>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              error={error & inputValidation(password)}
            />
          </motion.div>

          <Button disabled={formValidation()} type="submit">
            <div onClick={handleSubmitValidation}>Login</div>
          </Button>
        </form>
        <GoogleLogin
          className="google-login"
          clientId={process.env.CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
          theme="light"
        />
        {props.loginFailed && <p>Incorrect password or Email</p>}
      </div>
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
