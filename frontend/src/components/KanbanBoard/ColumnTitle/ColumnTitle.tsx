import { useRef } from "react";
import createColumnTitleKeyDownHandler from "../../../utils/handleColumnTitleKeyDown";
import type { ColumnTitleProps } from "../../../types/ColumnTitle";
import "./ColumnTitle.css";

const ColumnTitle = ({
  column,
  bag,
  isEditable,
  setIsEditable,
}: ColumnTitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <input
      type="text"
      className={`kanban-column-title-input ${isEditable ? "editable" : ""}`}
      defaultValue={column.title}
      onFocus={() => setIsEditable(true)}
      onBlur={() => setIsEditable(false)}
      onKeyDown={createColumnTitleKeyDownHandler({
        column,
        bag,
        setIsEditable,
        inputRef,
      })}
      ref={inputRef}
    />
  );
};

export default ColumnTitle;
