import kanbanCardTabs from "./kanbanCardTabs";
import "./KanbanCardTabs.css";
import type { BoardCard } from "../../../types/BoardCard";
import type { TabType } from "../../../types/TabType";

interface KanbanCardTabsProps {
  selectedCard: BoardCard;
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
}

const KanbanCardTabs = ({
  selectedCard,
  activeTab,
  setActiveTab,
}: KanbanCardTabsProps) => {
  return (
    <div className="kanban-taskbar-tabs">
      {kanbanCardTabs.map((tab) => (
        <button
          key={tab.id}
          className={`kanban-taskbar-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id as TabType)}
        >
          {tab.label}{" "}
          {tab.id === "comments" && `(${selectedCard.comments?.length})`}
        </button>
      ))}
    </div>
  );
};

export default KanbanCardTabs;
