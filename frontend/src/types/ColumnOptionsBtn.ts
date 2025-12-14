import type { ColumnHeaderProps } from "./ColumnHeaderProps";
import type { SetState } from "./CommonTypes";

export interface ColumnOptionsBtnProps extends ColumnHeaderProps {
  setIsEditable: SetState<boolean>;
}
