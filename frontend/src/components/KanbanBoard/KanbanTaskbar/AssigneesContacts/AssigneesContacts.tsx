import { useState } from "react";
import users from "../../../../mocks/users.json";
import "./AssigneesContacts.css";
import type { User } from "../../../../types/User";
import { createPortal } from "react-dom";
import ContactsSearch from "./ContactsSearch/ContactsSearch";
import { assets } from "../../../../assets/assets";

interface AssigneesContactsProps {
  assignees: User[];
  show: boolean;
  onClose: () => void;
}

const AssigneesContacts = ({
  assignees,
  show,
  onClose,
}: AssigneesContactsProps) => {
  const contacts = users;
  const [filteredContacts, setFilteredContacts] = useState<User[]>(contacts);

  const assignedContacts = filteredContacts.filter((contact) =>
    assignees.some((assignee) => assignee.id === contact.id)
  );

  const otherContacts = filteredContacts.filter(
    (contact) => !assignees.some((assignee) => assignee.id === contact.id)
  );

  return createPortal(
    <div
      className={`assignees-contacts-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className="assignees-contacts-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="assignees-contacts-header">
          <h2>
            Contacts <span>({filteredContacts.length})</span>
          </h2>
        </div>

        <ContactsSearch
          contacts={contacts}
          onSearchChange={setFilteredContacts}
        />
        <div className="assignees-contacts-list">
          {assignedContacts.map((assignee) => (
            <div className="assignee-contact">
              <div key={assignee.id} className="assignee-contact-item">
                <img
                  src={assignee.avatar}
                  alt={assignee.name}
                  className="assignee-contact-avatar"
                />
                <span className="assignee-contact-name">{assignee.name}</span>
              </div>
              <button className="assigned">✔ Assigned</button>
            </div>
          ))}
          {otherContacts.map((contact) => (
            <div className="assignee-contact">
              <div key={contact.id} className="assignee-contact-item">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="assignee-contact-avatar"
                />
                <span className="assignee-contact-name">{contact.name}</span>
              </div>
              <button>
                <img src={assets.plusSign} alt="assign" />
                Assign
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default AssigneesContacts;
