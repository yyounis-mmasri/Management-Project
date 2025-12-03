import { type ReactNode } from "react";
import "./Layout.css";
import { Sidebar } from "../shared/sidebar/Sidebar";
import { Navbar } from "../shared/navbar/Navbar";
import useToggle from "../../hooks/useToggle";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isCollapsed, toggle } = useToggle(false);
  return (
    <div className="layout">
      <Sidebar isCollapsed={isCollapsed} toggle={toggle} />
      <div className={`layout-main ${isCollapsed ? "expanded" : ""}`}>
        <Navbar />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};
