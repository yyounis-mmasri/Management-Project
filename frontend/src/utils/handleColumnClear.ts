import type { BoardColumn } from "../types/BoardColumn";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";
import type { BoardCard } from "../types/BoardCard";

interface HandleColumnClearArgs {
  column: BoardColumn;
  bag: ColumnHeaderBag<BoardCard>;
  setOptionsVisible: (visible: boolean) => void;
}

const handleColumnClear = ({
  column,
  bag,
  setOptionsVisible,
}: HandleColumnClearArgs) => {
  setOptionsVisible(false);
  column.cards.splice(0, column.cards.length);
  bag.renameColumn(column.title);
};

export default handleColumnClear;
