import { useState } from "react";
import "./KanbanTaskbar.css";
import KanbanCardStatus from "../KanbanCardStatus/KanbanCardStatus";
import KanbanCardActions from "../KanbanCardActions/KanbanCardActions";
import KanbanCardTabs from "../KanbanCardTabs/KanbanCardTabs.tsx";
import type { BoardCard } from "../../../types/BoardCard";
import type { ColumnHeaderBag } from "../../../types/ColumnHeaderBag";
import type { TabType } from "../../../types/TabType";
import TaskOverview from "../TaskOverview/TaskOverview.tsx";
import TaskSubtasks from "../TaskSubtasks/TaskSubtasks.tsx";
import TaskComments from "../TaskComments/TaskComments.tsx";

interface KanbanTaskbarProps {
  show: boolean;
  onClose: () => void;
  selectedCard: BoardCard;
  selectedBag: ColumnHeaderBag<BoardCard>;
}

const KanbanTaskbar = ({
  show,
  onClose,
  selectedCard,
  selectedBag,
}: KanbanTaskbarProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const TabComponents: Record<TabType, React.ReactNode> = {
    comments: <TaskComments selectedCard={selectedCard} />,
    subtasks: <TaskSubtasks selectedCard={selectedCard} />,
    overview: <TaskOverview selectedCard={selectedCard} />,
  };
  return (
    <div
      className={`kanban-taskbar-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`kanban-taskbar ${show ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kanban-taskbar-content">
          <div className="kanban-taskbar-header">
            <KanbanCardStatus card={selectedCard} />
            <KanbanCardActions
              selectedCard={selectedCard}
              selectedBag={selectedBag}
              onClose={onClose}
            />
          </div>
          <KanbanCardTabs
            selectedCard={selectedCard}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="kanban-taskbar-body">{TabComponents[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default KanbanTaskbar;
