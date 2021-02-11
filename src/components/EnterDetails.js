import React, { useState, useEffect } from "react";
import { withAuth } from "./../context/auth-context";
import { motion } from "framer-motion";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./../styles/button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";
import paymentService from "./../lib/payment-service";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { FormSideBar } from "./../styles/checkout";

function EnterDetails(props) {
  // state = { username: "", password: "" };
  const [inputs, setInputs] = useState({
    name: "",
    building: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    // email: "",
  });

  const handleSubmitValidation = () => {
    console.log("called");
    setError(formValidation());
  };

  const [error, setError] = useState(false);

  const formValidation = () => {
    const values = Object.values(inputs);
    let valid = false;
    values.forEach((value) => {
      if (value === "") {
        valid = true;
      }
    });
    console.log(valid);
    return valid;
  };

  useEffect(() => {
    handleInputs();
  }, []);

  const handleInputs = () => {
    console.log(props.user);
    if (props.user.address) {
      const address = props.user.address;

      setInputs({
        name: props.user.name,
        building: address.building,
        street: address.street,
        city: address.city,
        postcode: address.postcode,
        country: address.country,
        email: props.user.email,
      });
    }
  };

  const inputValidation = (value) => {
    if (value === "") {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, building, city, street, postcode, country } = inputs;

    // Call funciton coming from AuthProvider ( via withAuth )
    paymentService
      .saveDetails(name, building, city, street, postcode, country)
      .then((data) => {
        console.log(data);
        props.history.push("/review");
      });
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
      transition: { duration: 0.5, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      x: "100vw",

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

  const variant = {
    hidden: {
      x: "100vw",
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
  const { name, building, city, street, postcode, country } = inputs;

  const handleTest = () => {
    setInputs({
      building: "3",
      street: "Test Street",
      city: "Barcelona",
      postcode: "08181",
      country: "Spain",
    });
  };

  const classes = useStyles();
  return (
    <motion.div
      className="details-form"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ArrowBackIcon onClick={() => props.history.goBack()} />
      {/* <button onClick={handleTest}>Just Testing? Click here</button> */}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div className="form-container">
          <FormSideBar left="30px">
            <h1>Your Details</h1>
          </FormSideBar>
          <div>
            <motion.div variants={variant} animate="visible" inital="hidden">
              <TextField
                id="outlined-basic"
                type="text"
                label="Name"
                name="name"
                value={name}
                onChange={handleChange}
                error={error && inputValidation(name)}
              />
            </motion.div>

            {/* <motion.div variants={variant} animate="visible" inital="hidden">
              <TextField
                className="inputs"
                id="outlined-basic"
                label="Email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                error={error && inputValidation(email)}
              />
            </motion.div> */}

            <TextField
              id="outlined-basic"
              type="text"
              label="Country"
              name="country"
              value={country}
              onChange={handleChange}
              error={error && inputValidation(country)}
            />
            <TextField
              id="outlined-basic"
              type="text"
              name="postcode"
              label="Postcode"
              value={postcode}
              onChange={handleChange}
              error={error && inputValidation(postcode)}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              type="text"
              label="Building"
              name="building"
              value={building}
              onChange={handleChange}
              error={error && inputValidation(building)}
            />
            <TextField
              id="outlined-basic"
              type="text"
              label="Street"
              name="street"
              value={street}
              onChange={handleChange}
              error={error && inputValidation(street)}
            />

            <TextField
              id="outlined-basic"
              type="text"
              name="city"
              label="City"
              value={city}
              onChange={handleChange}
              error={error && inputValidation(city)}
            />
          </div>
          {/* formValidation() */}
          <Button disabled={formValidation()} type="submit">
            <div onClick={handleSubmitValidation}>
              <ArrowForwardIcon />
            </div>
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default withRouter(withAuth(EnterDetails));
