import "./Navbar.css";
import WorkspaceSelector from "./WorkspaceSelector/WorkspaceSelector";
import SearchBar from "./SearchBar/SearchBar";
import NavItem from "./NavItem/NavItem";
import Profile from "./Profile/Profile";
import navItems from "./utils/navItems";
import "./Navbar.css";
import SidebarToggleButton from "./SidebarToggleButton/SidebarToggleButton";

interface NavbarProps {
  isCollapsed: boolean;
  toggle: () => void;
}

export const Navbar = ({ isCollapsed, toggle }: NavbarProps) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        {/* Sidebar toggle button - Visible for smaller screens only */}
        <SidebarToggleButton isCollapsed={isCollapsed} toggle={toggle} />
        <WorkspaceSelector />
      </div>
      <div className="navbar-right">
        <SearchBar />
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} spin={item.spin} />
        ))}
        <Profile />
      </div>
    </header>
  );
};
