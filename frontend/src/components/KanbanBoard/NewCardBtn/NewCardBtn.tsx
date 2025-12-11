import handleNewCardClick from "../../../utils/handleNewCardClick";
import { assets } from "../../../assets/assets";
import type { NewCardBtnProps } from "../../../types/NewCardBtn";
import "./NewCardBtn.css";

const NewCardBtn = ({ setNewCard }: NewCardBtnProps) => {
  return (
    <button
      className="kanban-add-card-button"
      onClick={() => handleNewCardClick({ setNewCard })}
    >
      <img src={assets.addCircle} alt="Add Card" />
    </button>
  );
};

export default NewCardBtn;
