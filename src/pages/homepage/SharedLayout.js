import { Outlet } from "react-router-dom";
import StyledNavbar from "../../components/StyledNavbar";

const SharedLayout = ({ user }) => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
