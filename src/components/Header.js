import React from "react";
import food1 from "../images/istockphoto-1176929739-1024x1024.jpg";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <section>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterraneran restaurant, focused on
          traditional recipes servred with a modern twist.
        </p>
        <Link to="/reservation">
          <button aria-label="On Click">Reserve Table</button>
        </Link>
      </div>
      <div>
        <img src={food1} />
      </div>
    </section>
  </header>
);

export default Header;
