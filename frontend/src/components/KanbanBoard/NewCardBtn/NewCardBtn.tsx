import handleInputFocus from "../../../utils/handleInputFocus";
import { assets } from "../../../assets/assets";

interface NewCardBtnProps {
  setNewCard: (value: boolean) => void;
}

const NewCardBtn = ({ setNewCard }: NewCardBtnProps) => {
  return (
    <button
      className="kanban-add-card-button"
      onClick={() => {
        setNewCard(true);
        handleInputFocus({ selector: ".kanban-new-card-input" });
      }}
    >
      <img src={assets.plusSign} alt="Add Card" />
    </button>
  );
};

export default NewCardBtn;
