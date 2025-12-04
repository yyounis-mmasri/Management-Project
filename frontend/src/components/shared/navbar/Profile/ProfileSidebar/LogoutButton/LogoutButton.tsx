import "./LogoutButton.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../../context/AuthContext";
import Ripple from "../../../../Ripple/Ripple";

const LogoutButton = () => {
  const { toggleAuth } = useAuth();
  return (
    <Ripple>
      <Link to="#" className="logout-button" onClick={toggleAuth}>
        Logout
      </Link>
    </Ripple>
  );
};

export default LogoutButton;
