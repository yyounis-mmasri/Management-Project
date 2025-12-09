import { assets } from "../../../../assets/assets";
import "./SubtasksAdder.css";

interface SubtasksAdderProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

const SubtasksAdder = ({ value, onChange, onAdd }: SubtasksAdderProps) => {
  return (
    <div className="task-subtasks-adder">
      <input
        placeholder="Add subtask"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
      />
      <button type="button" onClick={onAdd}>
        <img src={assets.plusSign} alt="Add Subtask" />
        Add
      </button>
    </div>
  );
};

export default SubtasksAdder;
