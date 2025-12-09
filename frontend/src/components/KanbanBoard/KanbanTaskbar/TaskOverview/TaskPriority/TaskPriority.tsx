import { useState } from "react";
import type { BoardCard } from "../../../../../types/BoardCard";
import { handleCardPriority } from "../../../../../utils/handleCardPriority";
import priorities from "./priorities";
import "./TaskPriority.css";
import Ripple from "../../../../shared/Ripple/Ripple";

interface TaskPriorityProps {
  card: BoardCard;
}

const TaskPriority = ({ card }: TaskPriorityProps) => {
  const [activePriority, setActivePriority] = useState(card.priority);

  return (
    <div className="task-priority-container">
      {priorities.map((priority) => (
        <Ripple>
          <button
            key={priority.value}
            className={`task-priority-button ${
              activePriority === priority.value ? "active" : ""
            }`}
            onClick={() =>
              handleCardPriority(card, priority.value, setActivePriority)
            }
          >
            <img src={priority.imgURL} alt={priority.value} />
            {priority.label}
          </button>
        </Ripple>
      ))}
    </div>
  );
};

export default TaskPriority;
