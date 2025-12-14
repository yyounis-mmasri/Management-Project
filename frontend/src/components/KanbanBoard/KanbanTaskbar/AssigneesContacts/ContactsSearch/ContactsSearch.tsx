import { useState } from "react";
import type { User } from "../../../../../types/User";
import "./ContactsSearch.css";
import { handleContactsSearch } from "../../../../../utils/handleContactsSearch";
import { assets } from "../../../../../assets/assets";

interface ContactsSearchProps {
  contacts: User[];
  onSearchChange: (filteredContacts: User[]) => void;
}

const ContactsSearch = ({ contacts, onSearchChange }: ContactsSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="contacts-search-container">
      <div className="search-bar">
        <div className="search-icon">
          <img src={assets.search} alt="search" />
        </div>
        <input
          type="text"
          className="contacts-search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleContactsSearch(
            contacts,
            setSearchTerm,
            onSearchChange
          )}
        />
      </div>
    </div>
  );
};

export default ContactsSearch;
