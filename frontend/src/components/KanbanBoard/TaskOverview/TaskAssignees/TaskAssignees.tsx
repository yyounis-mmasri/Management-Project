import { useState } from "react";
import "./TaskAssignees.css";
import type { BoardCard } from "../../../../types/BoardCard";
import Tooltip from "../../../../utils/Tooltip/Tooltip";
import AssigneesContacts from "../../AssigneesContacts/AssigneesContacts";

const TaskAssignees = ({ card }: { card: BoardCard }) => {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className="task-assignees-container">
      {card.assignees.map((assignee) => (
        <img
          key={assignee.id}
          src={assignee.avatar}
          alt={assignee.name}
          className="task-assignee-avatar"
        />
      ))}
      <Tooltip text="Add Assignee">
        <div
          className="add-assignee-container"
          onClick={() => setShowContacts((prev) => !prev)}
        >
          +
        </div>
      </Tooltip>
      <AssigneesContacts
        assignees={card.assignees}
        show={showContacts}
        onClose={() => setShowContacts(false)}
      />
    </div>
  );
};

export default TaskAssignees;
