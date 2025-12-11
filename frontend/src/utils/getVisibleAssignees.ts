import type { User } from "../types/User";
import type { BoardCard } from "../types/BoardCard";

export const getVisibleAssignees = (
  assignees: User[],
  maxVisible: number = 3
) => {
  return assignees.slice(0, maxVisible);
};

export const getRemainingAssigneesCount = (
  assignees: User[],
  maxVisible: number = 3
): number => {
  const remaining = assignees.length - maxVisible;
  return remaining > 0 ? remaining : 0;
};

export const getCardAssigneeData = (card: BoardCard) => {
  const visibleAssignees = card.assignees
    ? getVisibleAssignees(card.assignees)
    : [];
  const remainingCount = card.assignees
    ? getRemainingAssigneesCount(card.assignees)
    : 0;

  return { visibleAssignees, remainingCount };
};
