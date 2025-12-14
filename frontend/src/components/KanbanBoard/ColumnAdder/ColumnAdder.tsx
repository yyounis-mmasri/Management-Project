import { useRef } from "react";
import "./ColumnAdder.css";
import handleColumnAdderKeyDown from "../../../utils/handleColumnAdderKeyDown";
import prepareColumnAdder from "../../../utils/prepareColumnAdder";
import useClickOutside from "../../../hooks/useClickOutside";
import type { ColumnAdderProps } from "../../../types/ColumnAdder";

const ColumnAdder = ({
  addingColumn,
  setAddingColumn,
  addColumn,
}: ColumnAdderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useClickOutside<HTMLInputElement>({
    ref: inputRef,
    onClickOutside: () => setAddingColumn(false),
  });

  return (
    <>
      {addingColumn ? (
        <input
          type="text"
          ref={inputRef}
          className="kanban-new-column-input"
          onKeyDown={(e) =>
            handleColumnAdderKeyDown(e, addColumn, setAddingColumn)
          }
        />
      ) : (
        <button
          className="kanban-add-column-button"
          onClick={() => prepareColumnAdder(setAddingColumn)}
        >
          + Add Column
        </button>
      )}
    </>
  );
};

export default ColumnAdder;
