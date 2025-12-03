import "./ProfileNav.css";
import { Link } from "react-router-dom";

interface ProfileNavProps {
  icon: string;
  label: string;
  count?: number;
}

const ProfileNav = ({ icon, label, count }: ProfileNavProps) => {
  return (
    <Link to="#" className="profile-nav">
      <img src={icon} alt={label} className="profile-nav__icon" />
      <span className="profile-nav__label">{label}</span>
      {count !== undefined && count > 0 && (
        <span className="profile-nav__count">{count}</span>
      )}
    </Link>
  );
};

export default ProfileNav;
