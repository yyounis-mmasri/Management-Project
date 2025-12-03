import "./DiscountCover.css";
import { assets } from "../../../../../../assets/assets";

const DiscountCover = () => {
  return (
    <div className="profile-sidebar__discounts-cover__outline">
      <div className="profile-sidebar__discounts-cover">
        <div className="profile-sidebar__discounts__text">
          <h3>30% OFF</h3>
          <p>Power up Productivity!</p>
          <button>Upgrade to Pro</button>
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
