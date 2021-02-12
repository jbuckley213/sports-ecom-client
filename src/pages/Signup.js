import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "./../styles/button";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GoogleLogin from "react-google-login";

function Signup(props) {
  // state = { username: "", password: "" }

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputs;

    props.signup(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, duration: 0.5 },
    },
    exit: {
      x: "+100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const handleLogin = async (googleData) => {
    props.googleLogin(googleData);
  };

  const { email, password } = inputs;
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

      <h1>Sign Up</h1>
      {/* <p className="line-1 anim-typewriter">HELLO THERE, WELCOME</p> */}

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          type="text"
          // variant="outlined"
          name="email"
          value={email}
          onChange={handleChange}
          error={error & inputValidation(email)}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          // variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={error & inputValidation(password)}
        />

        <Button disabled={formValidation()} type="submit">
          {" "}
          <div onClick={handleSubmitValidation}>Sign Up</div>
        </Button>
      </form>
      <GoogleLogin
        className="google-login"
        clientId="687427569890-43sl05f68lh2ncs56ce50uqnrg963o48.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
        theme="light"
      />
      {props.signupFailed && <p>Email is already taken</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </motion.div>
  );
}

export default withRouter(withAuth(Signup));
