import "./ProfileSidebar.css";
import { assets } from "../../../../../assets/assets";
import users from "../../../../../mocks/users.json";
import navItems from "./utils/navItems";
import ProfileNav from "./ProfileNav/ProfileNav";
import LogoutButton from "./LogoutButton/LogoutButton";
import ProfileSwitch from "./ProfileSwitch/ProfileSwitch";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import DiscountCover from "./DiscountCover/DiscountCover";
import { currentUser } from "../../../../../utils/currentUser";

interface ProfileSidebarProps {
  show: boolean;
  onClose?: () => void;
}

const ProfileSidebar = ({ show, onClose }: ProfileSidebarProps) => {
  const user = users.find((u) => u.id === currentUser?.id);
  if (!user) return null;
  return (
    <div
      className={`profile-sidebar__backdrop ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className={`profile-sidebar__container ${show ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="profile-sidebar__content">
          <button onClick={onClose} className="profile-sidebar__close">
            <img src={assets.cancel} alt="Close" />
          </button>

          <div className="profile__container">
            <ProfileIcon user={user} />
            <ProfileSwitch />
          </div>

          <div className="profile-sidebar__navs">
            {navItems.map((item) => (
              <ProfileNav
                key={item.label}
                icon={item.icon}
                label={item.label}
                count={item.count}
              />
            ))}
          </div>
          <div className="profile-sidebar__discounts">
            <DiscountCover />
          </div>
        </div>
        <div className="profile-sidebar__logout">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
