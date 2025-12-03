import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div>
    <h2>404 — Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </div>
);

export default NotFound;
