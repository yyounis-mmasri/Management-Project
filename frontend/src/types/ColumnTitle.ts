import type { BoardCard } from "./BoardCard";
import type { BoardColumn } from "./BoardColumn";
import type { ColumnHeaderBag } from "./ColumnHeaderBag";

export interface ColumnTitleProps {
  column: BoardColumn;
  bag: ColumnHeaderBag<BoardCard>;
  isEditable?: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}
