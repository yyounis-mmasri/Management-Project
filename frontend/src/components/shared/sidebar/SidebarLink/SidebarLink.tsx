import "./SidebarLink.css";
import { assets } from "../../../../assets/assets";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  linkName: string;
  path: string;
}

const SidebarLink = ({ linkName, path }: SidebarLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "is-active" : ""}`
      }
    >
      <img src={assets.kanban} alt="" aria-hidden="true" />
      <span>{linkName}</span>
    </NavLink>
  );
};

export default SidebarLink;
