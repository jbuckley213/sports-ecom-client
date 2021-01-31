import React, { useState } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";
import {
  LoginContainer,
  LoginForm,
  LoginButton,
  ReturnButton,
} from "./../styles/login";

function Login(props) {
  // state = { username: "", password: "" };
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = inputs;
    // Call funciton coming from AuthProvider ( via withAuth )
    props.login(username, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    // this.setState({ [name]: value });
  };
  const containerVariant = {
    visible: {
      x: "100vw",
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      x: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variant = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 10 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  const { username, password } = inputs;

  return (
    // <motion.div variants={containerVariant} initial="hidden" animate="visible">
    <LoginContainer>
      <ReturnButton onClick={props.goBack}>Back</ReturnButton>
      <h1>Login</h1>

      <LoginForm onSubmit={handleFormSubmit}>
        <motion.div variants={variant} animate="visable" inital="hidden">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Username"
          />
        </motion.div>

        <motion.div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </motion.div>

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default withAuth(Login);
