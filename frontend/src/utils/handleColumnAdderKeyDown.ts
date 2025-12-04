import type { KeyboardEvent } from "react";
import submitColumn from "./submitColumn";

const handleColumnAdderKeyDown = (
  e: KeyboardEvent<HTMLInputElement>,
  addColumn: (column: any) => unknown,
  setAddingColumn: (value: boolean) => void
) => {
  if (e.key === "Enter") {
    const value = e.currentTarget.value.trim();
    if (!value) return setAddingColumn(false);
    submitColumn(addColumn, setAddingColumn, value);
  } else if (e.key === "Escape") {
    setAddingColumn(false);
  }
};

export default handleColumnAdderKeyDown;
