import type { BoardCard } from "../types/BoardCard";

const hasCardMetadata = (card: BoardCard): boolean => {
  return (
    (card.attachments?.length ?? 0) > 0 ||
    (card.comments?.length ?? 0) > 0 ||
    (card.assignees?.length ?? 0) > 0
  );
};

export default hasCardMetadata;
