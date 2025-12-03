import { Fragment } from "react";
import "./TaskOverview.css";
import type { BoardCard } from "../../../types/BoardCard";
import CardTitle from "./CardTitle/CardTitle";
import sections from "./sections";

interface TaskOverviewProps {
  selectedCard: BoardCard;
}

const TaskOverview = ({ selectedCard }: TaskOverviewProps) => {
  return (
    <div>
      <CardTitle selectedCard={selectedCard} />
      <div className="task-overview-container">
        {sections.map((section) => (
          <Fragment key={section.label}>
            <div className="task-field">
              <h4>{section.label}</h4>
              <section.component card={selectedCard} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskOverview;
