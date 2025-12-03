import type { BoardCard } from "../../../../types/BoardCard";
import "./TaskReporter.css";

const TaskReporter = ({ card }: { card: BoardCard }) => {
  return (
    <img
      src={card.reporter.avatar}
      alt={card.reporter.name}
      className="task-reporter-avatar"
    />
  );
};

export default TaskReporter;
