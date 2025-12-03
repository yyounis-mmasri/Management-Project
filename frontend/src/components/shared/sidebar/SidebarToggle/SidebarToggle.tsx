import "./SidebarToggle.css";
import { assets } from "../../../../assets/assets";

interface SidebarToggleProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarToggle = ({ isCollapsed, toggle }: SidebarToggleProps) => {
  return (
    <button
      onClick={toggle}
      className={`sidebar__toggle ${isCollapsed ? "is-collapsed" : ""}`}
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      aria-pressed={isCollapsed}
    >
      {isCollapsed ? (
        <img src={assets.rightArrow} alt=">" />
      ) : (
        <img src={assets.leftArrow} alt="<" />
      )}
    </button>
  );
};

export default SidebarToggle;
