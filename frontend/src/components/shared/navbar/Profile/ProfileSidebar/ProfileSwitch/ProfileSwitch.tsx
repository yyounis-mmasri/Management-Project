import "./ProfileSwitch.css";
import Tooltip from "../../../../../../utils/Tooltip/Tooltip";
import users from "../../../../../../mocks/users.json";
import { currentUser } from "../../../../../../utils/currentUser";

const ProfileSwitch = () => {
  return (
    <div className="profile__switch">
      {users.map(
        (u, i) =>
          u.id !== currentUser?.id &&
          i <= 3 && (
            <Tooltip key={u.id} text={`Switch to: ${u.name}`}>
              <img
                key={u.id}
                src={u.avatar}
                alt={u.name}
                className="profile__switch__icon"
              />
            </Tooltip>
          )
      )}
      <Tooltip text="Add account">
        <div className="profile__switch__icon profile__switch__icon--new">
          +
        </div>
      </Tooltip>
    </div>
  );
};

export default ProfileSwitch;
