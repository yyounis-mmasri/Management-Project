import "./TaskLabels.css";
import type { BoardCard } from "../../../../types/BoardCard";

const TaskLabels = ({ card }: { card: BoardCard }) => {
  return (
    <div className="task-labels-container">
      {card.taskLabels?.map((label) => (
        <span
          key={label.id}
          className="task-label"
          style={{ backgroundColor: label.bgColor, color: label.color }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};

export default TaskLabels;
