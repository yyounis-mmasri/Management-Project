import kanbanCardTabs from "./kanbanCardTabs";
import "./KanbanCardTabs.css";
import type { BoardCard } from "../../../../types/BoardCard";
import type { TabType } from "../../../../types/TabType";
import { useTabIndicator } from "../../../../hooks/useTabIndicator";

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
  const { indicatorStyle, setTabRef } = useTabIndicator({
    activeTab,
    tabs: kanbanCardTabs,
  });

  return (
    <div className="kanban-taskbar-tabs">
      {/* Sliding background indicator */}
      <div
        className="tab-indicator"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />
      {kanbanCardTabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={setTabRef(index)}
          className={`kanban-taskbar-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id as TabType)}
        >
          {tab.label}
          {/* If tab is "comments", show the number of comments next to the label */}
          {tab.id === "comments" && ` (${selectedCard.comments?.length})`}
        </button>
      ))}
    </div>
  );
};

export default KanbanCardTabs;
