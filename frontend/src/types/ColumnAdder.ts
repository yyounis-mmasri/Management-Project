import type { BoardColumn } from "./BoardColumn";
import type { BooleanSetter } from "./CommonTypes";

export interface ColumnAdderProps {
  addingColumn: boolean;
  setAddingColumn: BooleanSetter;
  addColumn: (column: BoardColumn) => void;
}
