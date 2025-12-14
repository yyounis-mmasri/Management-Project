import type { BoardColumn } from "../types/BoardColumn";
import type { BoardCard } from "../types/BoardCard";
import type { User } from "../types/User";
import { Priority } from "../types/Priority";
import { currentUser } from "./currentUser";

interface HandleCardNewArgs {
  e: React.KeyboardEvent<HTMLInputElement>;
  column: BoardColumn;
  bag: {
    addCard: (card: BoardCard, options?: { on: "top" | "bottom" }) => void;
  };
  setNewCard: React.Dispatch<React.SetStateAction<boolean>>;
  reporter?: User;
}

const handleCardNew = ({
  e,
  column,
  bag,
  setNewCard,
  reporter,
}: HandleCardNewArgs) => {
  if (e.key === "Enter") {
    const title = e.currentTarget.value.trim();
    if (!title) return setNewCard(false);

    const resolvedReporter: User = reporter ??
      currentUser ?? {
        id: 0,
        name: "",
        username: "",
        email: "",
        phone: "",
        address: { city: "", street: "", zipcode: "" },
        avatar: "",
      };

    const now = new Date();
    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + 7);

    bag.addCard({
      columnId: column.id,
      id: Date.now(),
      title,
      reporter: resolvedReporter,
      taskLabels: [],
      startDate: now.toISOString(),
      dueDate: nextWeek.toISOString(),
      priority: Priority.Low,
      description: "",
      attachments: [],
      assignees: [],
      subtasks: [],
      comments: [],
    });
    setNewCard(false);
  }
  if (e.key === "Escape") setNewCard(false);
};

export default handleCardNew;
