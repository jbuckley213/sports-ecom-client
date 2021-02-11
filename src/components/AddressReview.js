import React from "react";
import { AddressContainer, AddressLine } from "./../styles/checkout";

function AddressReview(props) {
  return (
    <AddressContainer>
      <h5 data-testid="address-review">Address Review</h5>
      <AddressLine>{props.address.building}</AddressLine>
      <AddressLine>{props.address.street}</AddressLine>
      <AddressLine>{props.address.city}</AddressLine>
      <AddressLine>{props.address.postcode}</AddressLine>
      <AddressLine>{props.address.country}</AddressLine>
    </AddressContainer>
  );
}

export default AddressReview;
