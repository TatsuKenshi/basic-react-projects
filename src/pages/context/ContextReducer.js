import React from "react";
import { Link } from "react-router-dom";

const ContextReducer = () => {
  return (
    <>
      <div>
        <h1>ContextReducer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          totam corrupti reprehenderit reiciendis aliquid optio ipsam tenetur
          explicabo dolore quae.
        </p>
      </div>
      <div>
        <Link to="/context/modal">Modal and Sidebar</Link>
      </div>
      <div>
        <Link to="/context/stripe">Stripe Submenus</Link>
      </div>
      <div>
        <Link to="/context/cart">Cart</Link>
      </div>
    </>
  );
};

export default ContextReducer;
