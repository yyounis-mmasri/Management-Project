import { useState } from "react";
import "./CommentItem.css";
import type { Comment } from "../../../../types/Comment";
import AttachmentList from "../AttachmentList/AttachmentList";

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <li className="task-comment-item">
      <div className="comment-icon">
        <img src={comment.user.avatar} alt={comment.user.name} />
      </div>
      <div className="comment-details">
        <div>
          <h3 className="comment-author">{comment.user.name}</h3>
          <span className="comment-timestamp">3 hours</span>
        </div>
        <p className="comment-content">
          {comment.attachments &&
            (comment.attachments.length == 0 ? null : (
              <img
                src={comment.attachments[0]}
                alt="attachment"
                className="comment-attachment-preview"
                onClick={() => setShowImage(true)}
              />
            ))}
          {comment.content}
        </p>
      </div>
      <AttachmentList
        show={showImage}
        attachments={comment.attachments}
        onClose={() => setShowImage(false)}
      />
    </li>
  );
};

export default CommentItem;
