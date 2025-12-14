import { useMemo, useState } from "react";
import type { BoardCard } from "../../../../types/BoardCard";
import "./TaskSubtasks.css";
import { getInitialSubtasks } from "../../../../utils/subtasks/getInitialSubtasks";
import type { Subtask } from "../../../../types/Subtask";
import { getSubtasksProgress } from "../../../../utils/getSubtasksProgress";
import { toggleSubtask } from "../../../../utils/subtasks/toggleSubtask";
import { handleAddSubtask } from "../../../../utils/subtasks/handleAddSubtask";
import SubtasksHeader from "./SubtasksHeader/SubtasksHeader";
import SubtasksList from "./SubtasksList/SubtasksList";
import SubtasksAdder from "./SubtasksAdder/SubtasksAdder";

interface Props {
  selectedCard: BoardCard;
}

const TaskSubtasks = ({ selectedCard }: Props) => {
  const initial = useMemo(
    () => getInitialSubtasks(selectedCard?.id, selectedCard?.subtasks),
    [selectedCard?.id, selectedCard?.subtasks]
  );

  const [items, setItems] = useState<Subtask[]>(initial);
  const [newText, setNewText] = useState("");

  const { completed, total, percent } = getSubtasksProgress(items);

  const handleToggle = (id: number) => {
    setItems((prev) => toggleSubtask(prev, id));
  };

  const onAddSubtask = () => {
    handleAddSubtask(items, newText, setItems, setNewText);
  };

  return (
    <div className="task-subtasks-root">
      <SubtasksHeader completed={completed} total={total} percent={percent} />
      <SubtasksList items={items} onToggle={handleToggle} />
      <SubtasksAdder
        value={newText}
        onChange={setNewText}
        onAdd={onAddSubtask}
      />
    </div>
  );
};

export default TaskSubtasks;
