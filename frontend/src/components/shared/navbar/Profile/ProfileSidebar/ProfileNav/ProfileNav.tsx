import "./ProfileNav.css";
import { Link } from "react-router-dom";
import Ripple from "../../../../Ripple/Ripple";

interface ProfileNavProps {
  icon: string;
  label: string;
  count?: number;
}

const ProfileNav = ({ icon, label, count }: ProfileNavProps) => {
  return (
    <Ripple>
      <Link to="#" className="profile-nav">
        <img src={icon} alt={label} className="profile-nav__icon" />
        <span className="profile-nav__label">{label}</span>
        {count !== undefined && count > 0 && (
          <span className="profile-nav__count">{count}</span>
        )}
      </Link>
    </Ripple>
  );
};

export default ProfileNav;
