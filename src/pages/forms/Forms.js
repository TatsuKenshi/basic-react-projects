import React from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <div>
        <h1>Forms</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          totam corrupti reprehenderit reiciendis aliquid optio ipsam tenetur
          explicabo dolore quae.
        </p>
      </div>
      <div>
        <Link to="/forms/lorem">Lorem</Link>
      </div>
      <div>
        <Link to="/forms/colors">Color Generator</Link>
      </div>
      <div>
        <Link to="/forms/grocery">Grocery Bud</Link>
      </div>
    </>
  );
};

export default Forms;
