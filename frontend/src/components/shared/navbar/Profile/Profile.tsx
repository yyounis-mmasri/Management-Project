import { useState } from "react";
import "./Profile.css";
import { assets } from "../../../../assets/assets";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";
import Ripple from "../../Ripple/Ripple";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Ripple>
        <div className="profile" onClick={() => setIsOpen(true)}>
          <img
            src={assets.avatar}
            alt="Profile Avatar"
            className="profile__img"
          />
        </div>
      </Ripple>
      <ProfileSidebar show={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Profile;
