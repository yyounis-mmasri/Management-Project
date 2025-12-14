import { assets } from "../../../assets/assets";
import type { KanbanCardProps } from "../../../types/KanbanCard";
import type { AssetKey } from "../../../types/AssetKey";
import hasCardMetadata from "../../../utils/hasCardMetadata";
import { getCardAssigneeData } from "../../../utils/getVisibleAssignees";
import "./KanbanCard.css";

const KanbanCard = ({
  card,
  selectedCard,
  setSelectedCard,
}: KanbanCardProps) => {
  const { visibleAssignees, remainingCount } = getCardAssigneeData(card);

  return (
    <div
      className={`react-kanban-card ${
        selectedCard?.id === card.id ? "active" : ""
      }`}
      onClick={() => setSelectedCard(card)}
    >
      {/* Display first attachment */}
      {card.attachments && card.attachments[0] && (
        <img
          src={card.attachments[0]}
          alt={card.title}
          className="kanban-card-image"
        />
      )}

      <div className="kanban-card-info">
        <div className="kanban-card-priority-container">
          <img
            src={assets[card.priority as AssetKey]}
            alt={card.priority}
            className="kanban-card-priority"
          />
        </div>

        <h2 className="kanban-card-title">{card.title}</h2>
        {hasCardMetadata(card) && (
          <div className="kanban-card-other">
            {/* Attachments count */}
            {card.attachments && card.attachments.length > 0 && (
              <div className="kanban-card-attachments">
                <img src={assets.attachment} alt="Attachments" />
                <span>{card.attachments.length}</span>
              </div>
            )}
            {/* Comments count */}
            {card.comments && card.comments.length > 0 && (
              <div className="kanban-card-comments">
                <img src={assets.comment} alt="Comments" />
                <span>{card.comments.length}</span>
              </div>
            )}
            {/* Assignees icons */}
            {card.assignees && card.assignees.length > 0 && (
              <div className="kanban-card-assignees">
                {visibleAssignees.map((assignee, index) => (
                  <img
                    key={index}
                    src={assignee.avatar}
                    style={{ zIndex: 4 - index }}
                  />
                ))}
                {remainingCount > 0 && (
                  <span className="kanban-card-more-assignees">
                    +{remainingCount}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanCard;
