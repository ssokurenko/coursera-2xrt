import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => (
  <BookingForm
    availableTimes={props.availableTimes}
    dispatch={props.dispatch}
    submitForm={props.submitForm}
  />
);

export default Booking;
