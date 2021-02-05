import React from "react";
import { AddressContainer, AddressLine } from "./../styles/checkout";

function AddressReview(props) {
  return (
    <AddressContainer>
      <h3>Address Review</h3>
      <AddressLine>
        {props.address.building}, {props.address.street}
      </AddressLine>
      <AddressLine>{props.address.city}</AddressLine>
      <AddressLine>{props.address.postcode}</AddressLine>
      <AddressLine>{props.address.country}</AddressLine>
    </AddressContainer>
  );
}

export default AddressReview;
