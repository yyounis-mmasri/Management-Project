import type { Subtask } from "../../types/Subtask";

/**
 * Adds a new subtask to the list if the text is not empty.
 * Generates a new id by incrementing the max existing id.
 */
export function addSubtaskItem(items: Subtask[], text: string): Subtask[] {
  const trimmed = text.trim();
  if (!trimmed) return items;

  const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
  const newSub: Subtask = { id: nextId, text: trimmed, checked: false };
  return [...items, newSub];
}
