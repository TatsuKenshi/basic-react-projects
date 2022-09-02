import { NavLink } from "react-router-dom";

const StyledNavbar = ({ user }) => {
  return (
    <nav className="navbar">
      <NavLink style={{ marginRight: "10px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/usestate">
        useState
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/useeffect">
        useEffect
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/forms">
        Forms
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/useref">
        useRef
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/context">
        Context/Reducer
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
