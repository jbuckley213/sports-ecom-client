import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import { connect } from "react-redux";
import { getCart } from "./../actions/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "./../styles/button";

function LoginForm(props) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        // width: "25ch",
        width: "35ch",
        [theme.breakpoints.down("sm")]: {
          width: "25ch",
        },
      },
    },
  }));
  const handleSubmitValidation = () => {
    console.log("called");
    setError(formValidation());
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
    const { email, password } = inputs;
    // Call funciton coming from AuthProvider ( via withAuth )
    props.getCart();
    props.login(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
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
  const { email, password } = inputs;
  const classes = useStyles();
  return (
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
        name="email"
        value={email}
        onChange={handleChange}
        error={error & inputValidation(email)}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        error={error & inputValidation(password)}
      />

      <Button disabled={formValidation()} type="submit">
        <div onClick={handleSubmitValidation}>Login</div>
      </Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => {
      dispatch(getCart());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withAuth(LoginForm)));
