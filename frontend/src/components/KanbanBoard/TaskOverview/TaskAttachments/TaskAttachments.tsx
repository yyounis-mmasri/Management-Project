import { useState } from "react";
import "./TaskAttachments.css";
import type { BoardCard } from "../../../../types/BoardCard";
import { handleRemoveAttachment } from "../../../../utils/handleRemoveAttachment";
import { handleAddAttachment } from "../../../../utils/handleAddAttachment";
import Tooltip from "../../../../utils/Tooltip/Tooltip";
import getAttachmentName from "../../../../utils/getAttachmentName";
import { assets } from "../../../../assets/assets";
import Ripple from "../../../shared/Ripple/Ripple";

const TaskAttachments = ({ card }: { card: BoardCard }) => {
  const [, forceUpdate] = useState({});

  return (
    <div className="task-attachments">
      {card.attachments.map((attachment, index) => {
        const attachmentName = getAttachmentName(attachment);
        return (
          <Tooltip key={index} text={attachmentName}>
            <div key={index} className="attachment-item">
              <img src={attachment} alt="attachment" />
              <button
                className="remove-attachment-btn"
                onClick={() =>
                  handleRemoveAttachment(card, index, () => forceUpdate({}))
                }
              >
                ✕
              </button>
            </div>
          </Tooltip>
        );
      })}
      <Tooltip text="Add Attachment">
        <Ripple>
          <button
            className="add-attachment-btn"
            onClick={() => handleAddAttachment(card, () => forceUpdate({}))}
          >
            <img src={assets.upload} alt="Add Attachment" />
          </button>
        </Ripple>
      </Tooltip>
    </div>
  );
};

export default TaskAttachments;
