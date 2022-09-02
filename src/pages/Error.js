import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error</h2>
      <h5>No such page...</h5>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Error;
