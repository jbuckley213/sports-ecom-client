import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Quantity(props) {
  return (
    <div className="quantity">
      <div onClick={props.handleIncrement}>
        <AddIcon />
      </div>
      {props.quantity}
      <div onClick={props.handleDecrement}>
        <RemoveIcon />
      </div>
    </div>
  );
}

export default Quantity;
