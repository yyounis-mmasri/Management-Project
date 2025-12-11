import { useState, useRef } from "react";
import { assets } from "../../../assets/assets";
import type { ColumnOptionsBtnProps } from "../../../types/ColumnOptionsBtn";
import handleColumnRename from "../../../utils/handleColumnRename";
import handleColumnClear from "../../../utils/handleColumnClear";
import "./ColumnOptionsBtn.css";
import useClickOutside from "../../../hooks/useClickOutside";

const ColumnOptionsBtn = ({
  column,
  bag,
  setIsEditable,
}: ColumnOptionsBtnProps) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useClickOutside<HTMLDivElement>({
    ref: optionsRef,
    onClickOutside: () => setOptionsVisible(false),
  });

  return (
    <div className="kanban-column-options-container">
      <button
        className="kanban-options-button"
        onClick={() =>
          setOptionsVisible((prevOptionsVisible) => !prevOptionsVisible)
        }
      >
        <img src={assets.threeDots} alt="Options" />
      </button>
      {optionsVisible && (
        <div className="kanban-column-options" ref={optionsRef}>
          <button
            className="kanban-column-rename-button"
            onClick={() =>
              handleColumnRename({
                setIsEditable,
                setOptionsVisible,
                columnId: column.id,
              })
            }
          >
            <img src={assets.pencil} alt="Rename" /> Rename
          </button>
          <button
            className="kanban-column-clear-button"
            onClick={() =>
              handleColumnClear({
                column,
                bag,
                setOptionsVisible,
              })
            }
          >
            <img src={assets.eraser} alt="Clear" /> Clear
          </button>
          <button
            className="kanban-column-delete-button"
            onClick={() => bag.removeColumn()}
          >
            <img src={assets.trash} alt="Delete" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ColumnOptionsBtn;
