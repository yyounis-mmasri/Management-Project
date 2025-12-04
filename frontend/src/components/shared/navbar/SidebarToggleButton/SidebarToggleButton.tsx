import { assets } from "../../../../assets/assets";
import "./SidebarToggleButton.css";

interface SidebarToggleButtonProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarToggleButton = ({
  isCollapsed,
  toggle,
}: SidebarToggleButtonProps) => {
  return (
    <button
      className={`sidebar-toggle-button ${isCollapsed ? "collapsed" : ""}`}
      aria-label="Toggle sidebar"
      onClick={toggle}
    >
      <img src={assets.sidebarToggle} alt="Toggle sidebar" />
    </button>
  );
};

export default SidebarToggleButton;
