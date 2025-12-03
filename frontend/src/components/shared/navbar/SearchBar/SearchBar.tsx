import "./SearchBar.css";
import { assets } from "../../../../assets/assets";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={assets.search} alt="Search Icon" />
      <span>⌘K</span>
    </div>
  );
};

export default SearchBar;
