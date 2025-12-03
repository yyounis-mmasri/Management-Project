import "./NavItem.css";

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
    <button className={`nav-item ${spin ? "spin" : ""}`}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default NavItem;
