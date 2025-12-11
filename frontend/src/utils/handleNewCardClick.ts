import handleInputFocus from "./handleInputFocus";

interface HandleNewCardClickArgs {
  setNewCard: (value: boolean) => void;
}

const handleNewCardClick = ({ setNewCard }: HandleNewCardClickArgs) => {
  setNewCard(true);
  handleInputFocus({ selector: ".kanban-new-card-input" });
};

export default handleNewCardClick;
