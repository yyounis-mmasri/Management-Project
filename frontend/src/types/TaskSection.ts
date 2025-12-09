import type { BoardCard } from "./BoardCard";

export interface TaskSection {
  component: React.ComponentType<{ card: BoardCard }>;
  label: string;
}
