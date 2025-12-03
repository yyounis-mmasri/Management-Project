import "./LogoutButton.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../../context/AuthContext";

const LogoutButton = () => {
  const { toggleAuth } = useAuth();
  return (
    <Link to="#" className="logout-button" onClick={toggleAuth}>
      Logout
    </Link>
  );
};

export default LogoutButton;
