import subtasksJson from "../../mocks/subtasks.json";
import type { Subtask } from "../../types/Subtask";

/**
 * Loads initial subtasks for a card.
 * Prefers to read subtask ids from the card's `subtasks` array,
 * otherwise falls back to looking up by card id as a JSON key.
 */
export function getInitialSubtasks(
  cardId: number | undefined,
  cardSubtaskIds: number[] | undefined
): Subtask[] {
  const data = subtasksJson as Record<string, Subtask[]>;

  // Primary: use the card's subtask id references
  if (Array.isArray(cardSubtaskIds) && cardSubtaskIds.length > 0) {
    const result: Subtask[] = [];
    for (const id of cardSubtaskIds) {
      for (const key in data) {
        const found = data[key].find((s) => s.id === id);
        if (found) {
          result.push(found);
          break;
        }
      }
    }
    return result;
  }

  // Fallback: look up by card id as string key
  const cardKey = String(cardId ?? "");
  const byKey = data[cardKey];
  return Array.isArray(byKey) ? byKey : [];
}
