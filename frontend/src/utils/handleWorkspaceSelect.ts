import type { Workspace } from "../types/Workspace";

const handleWorkspaceSelect = (
  workspace: Workspace,
  setCurrentWorkspace: (workspace: Workspace) => void,
  setIsOpen: (isOpen: boolean) => void
) => {
  return (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentWorkspace(workspace);
    setIsOpen(false);
  };
};

export default handleWorkspaceSelect;
