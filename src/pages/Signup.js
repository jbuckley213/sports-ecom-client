import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "./../styles/button";
import { withRouter } from "react-router-dom";
import { MoblieAction } from "./../styles/login";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import GoogleLogin from "react-google-login";

function Signup(props) {
  // state = { username: "", password: "" }

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        // width: "25ch",
        width: "35ch",
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
    if (passwordValidation()) {
      valid = true;
    }
    if (!validateEmail(inputs.email)) {
      valid = true;
    }
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
    setError(formValidation());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = inputs;

    props.signup(email, password);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const passwordValidation = () => {
    if (inputs.password !== inputs.repeatPassword) {
      return true;
    } else {
      return false;
    }
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

  const { email, password, repeatPassword } = inputs;
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

      {/* <p className="line-1 anim-typewriter">HELLO THERE, WELCOME</p> */}
      <h1>Create An Account</h1>

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
          error={error && !validateEmail(email)}
          helperText={
            error && passwordValidation() ? "Please enter a valid email" : null
          }
        />

        <TextField
          id="outlined-basic"
          label="Password"
          // variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={error && inputValidation(password)}
        />
        <TextField
          id="outlined-basic"
          label="Repeat Password"
          // variant="outlined"
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          error={error && passwordValidation()}
          helperText={
            error && passwordValidation() ? "The password must match" : null
          }
        />

        <Button disabled={formValidation()} type="submit">
          {" "}
          <div onClick={handleSubmitValidation}>Sign Up</div>
        </Button>
      </form>
      <GoogleLogin
        className="google-login"
        clientId="687427569890-43sl05f68lh2ncs56ce50uqnrg963o48.apps.googleusercontent.com"
        // buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
        theme="light"
      />
      {props.signupFailed && <p>Email is already taken</p>}
      <MoblieAction>
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </MoblieAction>
    </motion.div>
  );
}

export default withRouter(withAuth(Signup));
