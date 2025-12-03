import "./WorkspaceItem.css";
import handleWorkspaceSelect from "../../../../../utils/handleWorkspaceSelect";
import type { Workspace } from "../../../../../types/Workspace";

interface WorkspaceItemProps {
  workspace: Workspace;
  setCurrentWorkspace: (workspace: WorkspaceItemProps["workspace"]) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const WorkspaceItem = ({
  workspace,
  setCurrentWorkspace,
  setIsOpen,
}: WorkspaceItemProps) => {
  return (
    <div
      key={workspace.id}
      className="workspace-option"
      onClick={handleWorkspaceSelect(workspace, setCurrentWorkspace, setIsOpen)}
    >
      <img
        src={workspace.logo}
        alt={workspace.alt}
        className="workspace-logo"
      />
      <h2 className="workspace-name">{workspace.name}</h2>
      <span
        className={`workspace-access ${
          workspace.access === "Pro" ? "pro" : ""
        }`}
      >
        {workspace.access}
      </span>
    </div>
  );
};

export default WorkspaceItem;
