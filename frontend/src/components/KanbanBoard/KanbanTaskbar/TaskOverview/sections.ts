import type { TaskSection } from "../../../../types/TaskSection";
import TaskAssignees from "./TaskAssignees/TaskAssignees";
import TaskAttachments from "./TaskAttachments/TaskAttachments";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskDueDate from "./TaskDueDate/TaskDueDate";
import TaskLabels from "./TaskLabels/TaskLabels";
import TaskPriority from "./TaskPriority/TaskPriority";
import TaskReporter from "./TaskReporter/TaskReporter";

const sections: TaskSection[] = [
  { component: TaskReporter, label: "Reporter" },
  { component: TaskAssignees, label: "Assignees" },
  { component: TaskLabels, label: "Labels" },
  { component: TaskDueDate, label: "Due Date" },
  { component: TaskPriority, label: "Priority" },
  { component: TaskDescription, label: "Description" },
  { component: TaskAttachments, label: "Attachments" },
];

export default sections;
