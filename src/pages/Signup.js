import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "./../styles/button";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Signup(props) {
  // state = { username: "", password: "" }

  const [inputs, setInputs] = useState({ username: "", password: "" });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = inputs;

    props.signup(username, password);
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
      transition: { duration: 0.5 },
    },
    exit: {
      x: "+100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const { username, password } = inputs;
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

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          type="text"
          // variant="outlined"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          // variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </motion.div>
  );
}

export default withRouter(withAuth(Signup));
