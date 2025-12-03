import { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import { assets } from "../../../assets/assets";
import SidebarLink from "./SidebarLink/SidebarLink";
import SidebarToggle from "./SidebarToggle/SidebarToggle";

interface SidebarProps {
  isCollapsed: boolean;
  toggle: () => void;
}

export const Sidebar = ({ isCollapsed, toggle }: SidebarProps) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  // Opens overview when sidebar is collapsed
  useEffect(() => {
    if (isCollapsed) {
      setIsOverviewOpen(true);
    }
  }, [isCollapsed]);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <SidebarLogo />
      <nav className="sidebar-overview">
        <div
          className="overview-header"
          onClick={() => setIsOverviewOpen((prev) => !prev)}
        >
          <span className={`down-arrow ${!isOverviewOpen && "closed"}`}>
            <img src={assets.downArrow} alt="V" className="image" />
          </span>
          <h2>Overview</h2>
        </div>
        <ul className={`overview-links ${!isOverviewOpen && "closed"}`}>
          <SidebarLink linkName="Kanban" path="/kanban" />
        </ul>
      </nav>
      <SidebarToggle isCollapsed={isCollapsed} toggle={toggle} />
    </div>
  );
};
