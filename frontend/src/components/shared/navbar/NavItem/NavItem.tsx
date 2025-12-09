import "./NavItem.css";
import Ripple from "../../Ripple/Ripple";

interface NavItemProps {
  icon: string;
  alt?: string;
  spin?: boolean;
}

const NavItem = ({
  icon,
  alt = "nav-item-icon",
  spin = false,
}: NavItemProps) => {
  return (
    <Ripple>
      <button className={`nav-item ${spin ? "spin" : ""}`}>
        <img src={icon} alt={alt} />
      </button>
    </Ripple>
  );
};

export default NavItem;
