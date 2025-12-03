import { assets } from "../../../../assets/assets";
import "./SidebarLogo.css";
import { Link } from "react-router-dom";

const SidebarLogo = () => {
  return (
    <Link to="/" className="sidebar-logo">
      <img src={assets.logo} alt="App Logo" className="logo-icon" />
      <h1 className="logo-title">Taskly</h1>
    </Link>
  );
};
export default SidebarLogo;
