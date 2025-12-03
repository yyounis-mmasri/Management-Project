import "@caldwell619/react-kanban/dist/styles.css";
import "./Kanban.css";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";

const KanbanPage = () => {
  return (
    <>
      <header className="kanban-header">
        <h1 className="kanban-title">Kanban</h1>
      </header>

      <main className="kanban-content">
        <KanbanBoard />
      </main>
    </>
  );
};

export default KanbanPage;
