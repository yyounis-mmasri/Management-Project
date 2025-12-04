import "./SearchBar.css";
import { assets } from "../../../../assets/assets";
import Ripple from "../../Ripple/Ripple";

const SearchBar = () => {
  return (
    <Ripple>
      <div className="search-bar">
        <img src={assets.search} alt="Search Icon" />
        <span>⌘K</span>
      </div>
    </Ripple>
  );
};

export default SearchBar;
