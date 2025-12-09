import { useEffect } from "react";
import type { BoardCard } from "../types/BoardCard";

/**
 * Resets a callback when the selected card changes.
 * Useful for clearing focus states or resetting UI when switching between cards.
 */
export const useResetOnCardChange = (
  selectedCard: BoardCard,
  resetCallback: () => void
) => {
  useEffect(() => {
    resetCallback();
  }, [selectedCard]);
};
