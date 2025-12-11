import handleInputFocus from "./handleInputFocus";

interface HandleColumnRenameArgs {
  setIsEditable: (editable: boolean) => void;
  setOptionsVisible: (visible: boolean) => void;
  columnId: number;
}

const handleColumnRename = ({
  setIsEditable,
  setOptionsVisible,
  columnId,
}: HandleColumnRenameArgs) => {
  setIsEditable(true);
  setOptionsVisible(false);
  handleInputFocus({ selector: `.kanban-column-title-input-${columnId}` });
};

export default handleColumnRename;
