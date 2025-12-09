import "./SubtasksHeader.css";

interface SubtasksHeaderProps {
  completed: number;
  total: number;
  percent: number;
}

const SubtasksHeader = ({ completed, total, percent }: SubtasksHeaderProps) => {
  return (
    <div className="task-subtasks-header">
      <div className="task-subtasks-count">{`${completed} of ${total}`}</div>
      <div className="task-subtasks-progress">
        <div
          className="task-subtasks-progress-bar"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default SubtasksHeader;
