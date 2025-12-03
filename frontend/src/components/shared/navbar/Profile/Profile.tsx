import { useState } from "react";
import "./Profile.css";
import { assets } from "../../../../assets/assets";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="profile" onClick={() => setIsOpen(true)}>
        <img
          src={assets.avatar}
          alt="Profile Avatar"
          className="profile__img"
        />
      </div>
      <ProfileSidebar show={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Profile;
