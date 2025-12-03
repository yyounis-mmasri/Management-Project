import { useState } from "react";
import "./WorkspaceSelector.css";
import workspacesData from "../../../../mocks/workspaces.json";
import { assets } from "../../../../assets/assets";
import WorkspaceItem from "./WorkspaceItem/WorkspaceItem";
import type { Workspace } from "../../../../types/Workspace";

const workspaces = workspacesData as Workspace[];

const WorkspaceSelector = () => {
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="workspace-selector-wrapper">
      <div className="workspace-selector" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={currentWorkspace.logo}
          alt={currentWorkspace.alt}
          className="workspace-logo"
        />
        <h2 className="workspace-name">{currentWorkspace.name}</h2>
        <span
          className={`workspace-access ${
            currentWorkspace.access === "Pro" ? "pro" : ""
          }`}
        >
          {currentWorkspace.access}
        </span>
        <img src={assets.updownArrow} alt="⇕" className="workspace-arrow" />
      </div>

      {isOpen && (
        <>
          <div
            className="workspace-dropdown__backdrop"
            onClick={() => setIsOpen(false)}
          />
          <div className="workspace-dropdown">
            {workspaces.map((workspace) => (
              <WorkspaceItem
                key={workspace.id}
                workspace={workspace}
                setCurrentWorkspace={setCurrentWorkspace}
                setIsOpen={setIsOpen}
              />
            ))}
            <div className="divider" />
            <div className="workspace-create">
              <img
                src={assets.plusSign}
                alt="+"
                className="workspace-plus-sign"
              />
              <p className="workspace-create-text">Create Workspace</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default WorkspaceSelector;
