import React from "react";
import { Link } from "react-router-dom";

const UseState = () => {
  return (
    <>
      <div>
        <h1>useState</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          totam corrupti reprehenderit reiciendis aliquid optio ipsam tenetur
          explicabo dolore quae.
        </p>
      </div>
      <div>
        <Link to="/usestate/reminder">Reminder</Link>
      </div>
    </>
  );
};

export default UseState;
