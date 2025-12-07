import { useState } from "react";
import "./KanbanTaskbar.css";
import KanbanCardStatus from "../KanbanCardStatus/KanbanCardStatus";
import KanbanCardActions from "../KanbanCardActions/KanbanCardActions";
import KanbanCardTabs from "./KanbanCardTabs/KanbanCardTabs.tsx";
import type { BoardCard } from "../../../types/BoardCard";
import type { ColumnHeaderBag } from "../../../types/ColumnHeaderBag";
import type { TabType } from "../../../types/TabType";
import { TabComponents } from "./TabComponents.tsx";
import { assets } from "../../../assets/assets.ts";

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

  const tabComponents = TabComponents({ selectedCard });

  const isCommentsTab = activeTab === "comments";

  return (
    <div
      className={`kanban-taskbar-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      {/* Prevent clicks inside taskbar from bubbling to backdrop and closing */}
      <div
        className={`kanban-taskbar ${show ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kanban-taskbar-content">
          <div className="kanban-taskbar-header">
            <div className="kanban-taskbar-header-left">
              <button onClick={onClose} className="kanban-taskbar-close">
                <img src={assets.cancel} alt="Close" />
              </button>
              <KanbanCardStatus card={selectedCard} />
            </div>
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
          <div
            className={`kanban-taskbar-body ${
              isCommentsTab ? "with-input-bar" : ""
            }`}
          >
            {tabComponents[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanTaskbar;
