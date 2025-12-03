import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import type { BoardCard } from "../../../../types/BoardCard";
import "./TaskDueDate.css";
import Calendar from "./Calendar/Calendar";
import formatDateRange from "../../../../utils/date/formatDateRange";

const TaskDueDate = ({ card }: { card: BoardCard }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [start, setStart] = useState(new Date(card.startDate));
  const [due, setDue] = useState(new Date(card.dueDate));

  return (
    <>
      <div
        className="task-due-date-container"
        onClick={() => setShowPicker(!showPicker)}
      >
        {formatDateRange(start, due)}
      </div>
      <Calendar
        startDate={start}
        dueDate={due}
        setStart={setStart}
        setDue={setDue}
        show={showPicker}
        onClose={() => setShowPicker(false)}
      />
    </>
  );
};

export default TaskDueDate;
