import type { BoardCard } from "./BoardCard";

export interface KanbanCardProps {
  card: BoardCard;
  selectedCard?: BoardCard;
  setSelectedCard: (card: BoardCard) => void;
}
