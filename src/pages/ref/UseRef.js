import React from "react";
import { Link } from "react-router-dom";

const UseRef = () => {
  return (
    <>
      <div>
        <h1>useRef</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          totam corrupti reprehenderit reiciendis aliquid optio ipsam tenetur
          explicabo dolore quae.
        </p>
      </div>
      <div>
        <Link to="/useref/navbar">Navbar</Link>
      </div>
    </>
  );
};

export default UseRef;
