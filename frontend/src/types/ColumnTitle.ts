import type { BoardCard } from "./BoardCard";
import type { BoardColumn } from "./BoardColumn";
import type { ColumnHeaderBag } from "./ColumnHeaderBag";
import type { SetState } from "./CommonTypes";

export interface ColumnTitleProps {
  column: BoardColumn;
  bag: ColumnHeaderBag<BoardCard>;
  isEditable?: boolean;
  setIsEditable: SetState<boolean>;
}
