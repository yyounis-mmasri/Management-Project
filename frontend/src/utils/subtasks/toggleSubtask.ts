import type { Subtask } from "../../types/Subtask";

/**
 * Toggles the `checked` state of a subtask by id.
 */
export function toggleSubtask(items: Subtask[], id: number): Subtask[] {
  return items.map((s) => (s.id === id ? { ...s, checked: !s.checked } : s));
}
