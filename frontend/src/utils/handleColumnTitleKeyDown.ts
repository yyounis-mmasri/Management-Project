import type { BoardColumn } from "../types/BoardColumn";
import type { BoardCard } from "../types/BoardCard";
import type { ColumnHeaderBag } from "../types/ColumnHeaderBag";
import handleKeyDown from "./handleKeyDown";
import type React from "react";

interface Params {
  column: BoardColumn;
  bag: ColumnHeaderBag<BoardCard>;
  setIsEditable: (value: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const createColumnTitleKeyDownHandler = ({
  column,
  bag,
  setIsEditable,
  inputRef,
}: Params) => {
  return (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown({
      e,
      onEnter: () => {
        if (inputRef.current) {
          const next = inputRef.current.value.trim();
          if (next && next !== column.title) {
            bag.renameColumn(next);
          }
          inputRef.current.blur();
        }
        setIsEditable(false);
      },
      onEscape: () => {
        if (inputRef.current) {
          inputRef.current.blur();
        }
        setIsEditable(false);
      },
    });
  };
};

export default createColumnTitleKeyDownHandler;
