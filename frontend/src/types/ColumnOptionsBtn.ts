import type { ColumnHeaderProps } from "./ColumnHeaderProps";
import type { Dispatch, SetStateAction } from "react";

export interface ColumnOptionsBtnProps extends ColumnHeaderProps {
  setIsEditable: Dispatch<SetStateAction<boolean>>;
}
