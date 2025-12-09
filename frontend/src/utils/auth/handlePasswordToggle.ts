/**
 * Toggles password visibility state.
 */
export function handlePasswordToggle(
  currentState: boolean,
  setState: (value: boolean) => void
): void {
  setState(!currentState);
}

/**
 * Creates a toggle handler for password visibility.
 */
export function createPasswordToggleHandler(
  setState: React.Dispatch<React.SetStateAction<boolean>>
) {
  return () => setState((prev) => !prev);
}
