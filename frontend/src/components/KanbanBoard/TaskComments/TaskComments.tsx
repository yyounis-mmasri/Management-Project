import "./TaskComments.css";
import type { BoardCard } from "../../../types/BoardCard";
import CommentItem from "./CommentItem/CommentItem";
import CommentInputBar from "./CommentInputBar/CommentInputBar";

interface TaskCommentsProps {
  selectedCard: BoardCard;
}

const TaskComments = ({ selectedCard }: TaskCommentsProps) => {
  return (
    <div className="task-comments-container">
      {selectedCard.comments && selectedCard.comments.length > 0 ? (
        <ul className="task-comments-list">
          {selectedCard.comments.map((comment, index) => (
            <CommentItem key={index} comment={comment} />
          ))}
        </ul>
      ) : (
        <div className="no-comments">No comments available.</div>
      )}
      <CommentInputBar />
    </div>
  );
};

export default TaskComments;
