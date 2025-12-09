import "./SidebarToggle.css";
import { assets } from "../../../../assets/assets";
import Ripple from "../../Ripple/Ripple";

interface SidebarToggleProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarToggle = ({ isCollapsed, toggle }: SidebarToggleProps) => {
  return (
    <Ripple>
      <button
        onClick={toggle}
        className={`sidebar__toggle ${isCollapsed ? "is-collapsed" : ""}`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-pressed={isCollapsed}
      >
        <img
          src={isCollapsed ? assets.rightArrow : assets.leftArrow}
          alt={isCollapsed ? ">" : "<"}
        />
      </button>
    </Ripple>
  );
};

export default SidebarToggle;
