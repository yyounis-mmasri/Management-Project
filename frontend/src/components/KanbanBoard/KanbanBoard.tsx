import { useState, useRef } from "react";
import type { BoardCard } from "../../types/BoardCard";
import type { ColumnHeaderBag } from "../../types/ColumnHeaderBag";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";
import ColumnAdder from "./ColumnAdder/ColumnAdder";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import KanbanCard from "./KanbanCard/KanbanCard";
import usePersistentColumnTitles from "../../hooks/usePersistentColumnTitles";
import KanbanTaskbar from "./KanbanTaskbar/KanbanTaskbar";
import handleTaskbarClose from "../../utils/handleTaskbarClose";
import handleCardSelect from "../../utils/handleCardSelect";
import createWrappedBag from "../../utils/createWrappedBag";

const KanbanBoard = () => {
  const [selectedCard, setSelectedCard] = useState<BoardCard | null>(null);
  const [selectedBag, setSelectedBag] =
    useState<ColumnHeaderBag<BoardCard> | null>(null);
  const [showTaskbar, setShowTaskbar] = useState(false);
  const [addingColumn, setAddingColumn] = useState(false);
  const { boardTitles, persistRename } =
    usePersistentColumnTitles(initialBoard);
  const columnBagsRef = useRef<Map<number, ColumnHeaderBag<BoardCard>>>(
    new Map()
  );

  return (
    <>
      <UncontrolledBoard
        initialBoard={initialBoard}
        allowRenameColumn={true}
        renderColumnHeader={(column, bag) => {
          const columnId = Number(column.id);
          const wrappedBag = createWrappedBag({ bag, columnId, persistRename });
          columnBagsRef.current.set(columnId, wrappedBag);

          const persistedTitle = boardTitles[columnId] ?? column.title;
          return (
            <ColumnHeader
              column={{
                ...column,
                id: columnId,
                title: persistedTitle,
              }}
              bag={wrappedBag}
            />
          );
        }}
        allowAddColumn={true}
        renderColumnAdder={({ addColumn }) => (
          <ColumnAdder
            addingColumn={addingColumn}
            setAddingColumn={setAddingColumn}
            addColumn={addColumn}
          />
        )}
        renderCard={(card) => (
          <KanbanCard
            card={card}
            setSelectedCard={(selectedCard) =>
              handleCardSelect({
                selectedCard,
                columnBagsRef,
                setSelectedCard,
                setSelectedBag,
                setShowTaskbar,
              })
            }
          />
        )}
        allowAddCard={true}
      />
      {selectedCard && selectedBag && (
        <KanbanTaskbar
          show={showTaskbar}
          onClose={() =>
            handleTaskbarClose({
              setShowTaskbar,
              setSelectedCard,
              setSelectedBag,
            })
          }
          selectedCard={selectedCard}
          selectedBag={selectedBag}
        />
      )}
    </>
  );
};

export default KanbanBoard;
