import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => (
  <footer>
    <section>
      <div>
        <img src={small_logo} />
      </div>
      <div>
        <h4>Document Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
    </section>
  </footer>
);

export default Footer;
