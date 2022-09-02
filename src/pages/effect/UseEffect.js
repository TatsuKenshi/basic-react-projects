import React from "react";
import { Link } from "react-router-dom";

const UseEffect = () => {
  return (
    <>
      <div>
        <h1>useEffect</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          totam corrupti reprehenderit reiciendis aliquid optio ipsam tenetur
          explicabo dolore quae.
        </p>
      </div>
      <div>
        <Link to="/useeffect/tours">Tours</Link>
      </div>
      <div>
        <Link to="/useeffect/reviews">Reviews</Link>
      </div>
      <div>
        <Link to="/useeffect/questions">Questions</Link>
      </div>
      <div>
        <Link to="/useeffect/menu">Menu</Link>
      </div>
      <div>
        <Link to="/useeffect/tabs">Tabs</Link>
      </div>
      <div>
        <Link to="/useeffect/slider">Slider</Link>
      </div>
    </>
  );
};

export default UseEffect;
