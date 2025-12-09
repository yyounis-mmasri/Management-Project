import React from "react";
import type { BoardCard } from "../../../types/BoardCard";
import type { TabType } from "../../../types/TabType";
import TaskOverview from "../TaskOverview/TaskOverview.tsx";
import TaskSubtasks from "../TaskSubtasks/TaskSubtasks.tsx";
import TaskComments from "../TaskComments/TaskComments.tsx";

interface TabComponentsProps {
  selectedCard: BoardCard;
}

export const TabComponents = ({
  selectedCard,
}: TabComponentsProps): Record<TabType, React.ReactNode> => ({
  comments: <TaskComments selectedCard={selectedCard} />,
  subtasks: <TaskSubtasks selectedCard={selectedCard} />,
  overview: <TaskOverview selectedCard={selectedCard} />,
});
