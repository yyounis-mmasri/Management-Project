import type { BoardCard } from "../types/BoardCard";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";
import handleCardRemove from "./handleCardRemove";

interface CreateWrappedBagParams {
  bag: Omit<ColumnHeaderBag<BoardCard>, "removeCard">;
  columnId: number;
  persistRename: (columnId: number, newTitle: string) => void;
}

export default function createWrappedBag({
  bag,
  columnId,
  persistRename,
}: CreateWrappedBagParams): ColumnHeaderBag<BoardCard> {
  return {
    ...bag,
    renameColumn: (newTitle: string) => {
      bag.renameColumn(newTitle);
      persistRename(columnId, newTitle);
    },
    removeCard: (card: BoardCard) => handleCardRemove({ columnId, card }),
  };
}
