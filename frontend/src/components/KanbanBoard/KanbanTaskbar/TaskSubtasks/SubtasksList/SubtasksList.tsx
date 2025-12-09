import type { Subtask } from "../../../../../types/Subtask";
import "./SubtasksList.css";

interface SubtasksListProps {
  items: Subtask[];
  onToggle: (id: number) => void;
}

const SubtasksList = ({ items, onToggle }: SubtasksListProps) => {
  return (
    <ul className="task-subtasks-list">
      {items.map((s) => (
        <li key={s.id} className="task-subtasks-item">
          <label>
            <input
              type="checkbox"
              checked={s.checked}
              onChange={() => onToggle(s.id)}
            />
            <span className={s.checked ? "checked" : ""}>{s.text}</span>
          </label>
        </li>
      ))}
      {items.length === 0 && (
        <li className="task-subtasks-empty">No subtasks yet</li>
      )}
    </ul>
  );
};

export default SubtasksList;
