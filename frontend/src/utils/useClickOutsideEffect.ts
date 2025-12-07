import { useEffect, type RefObject } from "react";

export const useClickOutsideEffect = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup: remove event listener when component unmounts or dependencies change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
