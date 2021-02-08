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

function Login(props) {
  // state = { username: "", password: "" };
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputs;
    // Call funciton coming from AuthProvider ( via withAuth )
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
  const { email, password } = inputs;
  console.log("props", props);
  const classes = useStyles();
  return (
    <motion.div
      className="signup"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ArrowBackIcon onClick={() => props.history.goBack()} />
      <h1>Login</h1>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <motion.div variants={variant} animate="visible" inital="hidden">
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

        <motion.div variants={variant} animate="visible" inital="hidden">
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
      {props.loginFailed && <p>Incorrect password or Email</p>}
    </motion.div>
  );
}

export default withRouter(withAuth(Login));
