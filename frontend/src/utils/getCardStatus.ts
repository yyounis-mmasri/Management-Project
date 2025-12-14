import initialBoard from "../mocks/initialBoard";
import type { BoardCard } from "../types/BoardCard";

const getCardStatus = (card: BoardCard) => {
  const column = initialBoard.columns.find((col) => col.id === card.columnId);
  return column ? column.title : "No Status";
};

export default getCardStatus;
