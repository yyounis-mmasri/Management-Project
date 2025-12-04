import { assets } from "../../../../assets/assets";
import "./SidebarToggleButton.css";
import Ripple from "../../Ripple/Ripple";

interface SidebarToggleButtonProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarToggleButton = ({
  isCollapsed,
  toggle,
}: SidebarToggleButtonProps) => {
  return (
    <Ripple>
      <button
        className={`sidebar-toggle-button ${isCollapsed ? "collapsed" : ""}`}
        aria-label="Toggle sidebar"
        onClick={toggle}
      >
        <img src={assets.sidebarToggle} alt="Toggle sidebar" />
      </button>
    </Ripple>
  );
};

export default SidebarToggleButton;
