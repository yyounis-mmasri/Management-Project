import { createPortal } from "react-dom";
import DatePicker from "react-datepicker";
import startDateHandler from "../../../../../utils/date/startDateHandler";
import dueDateHandler from "../../../../../utils/date/dueDateHandler";
import "./Calendar.css";

interface CalendarProps {
  startDate: Date;
  dueDate: Date;
  setStart: (date: Date) => void;
  setDue: (date: Date) => void;
  onStartDateChange?: (date: Date | null) => void;
  onDueDateChange?: (date: Date | null) => void;
  show: boolean;
  onClose: () => void;
}

const Calendar = ({
  startDate,
  dueDate,
  show,
  onClose,
  onStartDateChange,
  onDueDateChange,
  setStart,
  setDue,
}: CalendarProps) => {
  const handleStartDateChange = startDateHandler(setStart, onStartDateChange);
  const handleDueDateChange = dueDateHandler(setDue, onDueDateChange);

  return createPortal(
    <div
      className={`calendar-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="calendar-container" onClick={(e) => e.stopPropagation()}>
        <div className="calendars">
          <div>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              inline
            />
          </div>
          <div>
            <DatePicker
              selected={dueDate}
              onChange={handleDueDateChange}
              inline
            />
          </div>
        </div>
        <div className="calendar-action-buttons">
          <button className="calendar-cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="calendar-apply-button" onClick={onClose}>
            Apply
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Calendar;
