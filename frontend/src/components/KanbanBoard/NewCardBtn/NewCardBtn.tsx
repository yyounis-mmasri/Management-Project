import handleInputFocus from "../../../utils/handleInputFocus";
import { assets } from "../../../assets/assets";
import type { NewCardBtnProps } from "../../../types/NewCardBtn";
import "./NewCardBtn.css";

const NewCardBtn = ({ setNewCard }: NewCardBtnProps) => {
  return (
    <button
      className="kanban-add-card-button"
      onClick={() => {
        setNewCard(true);
        handleInputFocus({ selector: ".kanban-new-card-input" });
      }}
    >
      <img src={assets.addCircle} alt="Add Card" />
    </button>
  );
};

export default NewCardBtn;
