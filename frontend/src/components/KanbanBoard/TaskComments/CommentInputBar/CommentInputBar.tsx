import { currentUser } from "../../../../utils/currentUser";
import "./CommentInputBar.css";
import { assets } from "../../../../assets/assets";

const CommentInputBar = () => {
  return (
    <div className="comment-input-bar-container">
      <div className="user-icon">
        <img
          src={currentUser?.avatar || currentUser?.name.charAt(0)}
          alt="User Avatar"
        />
      </div>
      <div className="comment-input-bar">
        <div>
          <textarea className="comment-input" placeholder="Type a message" />
        </div>
        <div className="comment-input-bar-actions">
          <div className="comment-input-bar-attach">
            <button className="attach-button">
              <img src={assets.attachImg} alt="Attach Image" />
            </button>
            <button className="attach-button">
              <img src={assets.attachment} alt="Attach File" />
            </button>
          </div>
          <button className="send-button">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CommentInputBar;
