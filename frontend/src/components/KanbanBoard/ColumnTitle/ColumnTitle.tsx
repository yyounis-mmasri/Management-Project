import { useRef } from "react";
import createColumnTitleKeyDownHandler from "../../../utils/handleColumnTitleKeyDown";
import useClickOutside from "../../../hooks/useClickOutside";
import type { ColumnTitleProps } from "../../../types/ColumnTitle";
import "./ColumnTitle.css";

const ColumnTitle = ({
  column,
  bag,
  isEditable,
  setIsEditable,
}: ColumnTitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useClickOutside<HTMLDivElement>({
    ref: titleRef,
    onClickOutside: () => setIsEditable(false),
  });

  return (
    <div ref={titleRef}>
      {isEditable ? (
        <input
          type="text"
          className="kanban-column-title-input"
          defaultValue={column.title}
          autoFocus
          onBlur={() => setIsEditable(false)}
          onKeyDown={createColumnTitleKeyDownHandler({
            column,
            bag,
            setIsEditable,
            inputRef,
          })}
          ref={inputRef}
        />
      ) : (
        <span
          className="kanban-column-title"
          onClick={() => setIsEditable(true)}
        >
          {column.title}
        </span>
      )}
    </div>
  );
};

export default ColumnTitle;
