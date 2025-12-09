import type { Subtask } from "../../types/Subtask";
import { addSubtaskItem } from "./addSubtaskItem";

export const handleAddSubtask = (
  items: Subtask[],
  newText: string,
  setItems: (items: Subtask[]) => void,
  setNewText: (text: string) => void
) => {
  setItems(addSubtaskItem(items, newText));
  setNewText("");
};
