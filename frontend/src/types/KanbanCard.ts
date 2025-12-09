import type { BoardCard } from "./BoardCard";

export interface KanbanCardProps {
  card: BoardCard;
  setSelectedCard: (card: BoardCard) => void;
}
