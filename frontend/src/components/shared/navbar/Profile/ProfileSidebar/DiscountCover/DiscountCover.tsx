import "./DiscountCover.css";
import { assets } from "../../../../../../assets/assets";
import Ripple from "../../../../Ripple/Ripple";

const DiscountCover = () => {
  return (
    <div className="profile-sidebar__discounts-cover__outline">
      <div className="profile-sidebar__discounts-cover">
        <div className="profile-sidebar__discounts__text">
          <h3>30% OFF</h3>
          <p>Power up Productivity!</p>
          <Ripple>
            <button>Upgrade to Pro</button>
          </Ripple>
        </div>
        <img
          src={assets.rocket}
          alt="Discounts"
          className="profile-sidebar__discounts__img"
        />
      </div>
    </div>
  );
};

export default DiscountCover;
