import "./ProfileIcon.css";
import type { User } from "../../../../../../types/User";

interface ProfileIconProps {
  user: User;
}

const ProfileIcon = ({ user }: ProfileIconProps) => {
  return (
    <>
      <img src={user.avatar} alt="Profile Avatar" className="profile__icon" />
      <div className="profile__details">
        <h2 className="profile__name">{user.name}</h2>
        <p className="profile__email">{user.email}</p>
      </div>
    </>
  );
};

export default ProfileIcon;
