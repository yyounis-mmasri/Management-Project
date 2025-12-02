import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./variables.css";
import App from "./App.tsx";
import Waves from "node-waves";
import "node-waves/dist/waves.min.css";

function Bootstrap() {
  useEffect(() => {
    try {
      Waves.init();
      const selectors = [
        ".nav-item",
        ".search-bar",
        ".profile",
        ".profile-sidebar__close",
        ".profile-nav",
        ".logout-button",
        ".profile__switch__icon",
        ".profile__switch__icon--new",
        ".workspace-selector",
        ".workspace-dropdown .workspace-item",
        ".workspace-create",
        ".workspace-option",
        ".sidebar .sidebar__toggle",
        ".sidebar .overview-header",
        ".down-arrow img",
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          el.classList.add("waves-effect");
        });
      });
    } catch (e) {
      console.warn("Waves init failed", e);
    }
  }, []);
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Bootstrap />);
