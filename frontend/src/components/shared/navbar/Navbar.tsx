import "./Navbar.css";
import WorkspaceSelector from "./WorkspaceSelector/WorkspaceSelector";
import SearchBar from "./SearchBar/SearchBar";
import NavItem from "./NavItem/NavItem";
import Profile from "./Profile/Profile";
import navItems from "./utils/navItems";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
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
