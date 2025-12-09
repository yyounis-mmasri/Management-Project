import type { Dispatch, SetStateAction } from "react";

/**
 * Common React setState function type
 * Useful for components that need to accept setState functions as props
 */
export type SetState<T> = Dispatch<SetStateAction<T>>;

/**
 * Common boolean setter type
 * Used frequently for toggle states, modals, visibility, etc.
 */
export type BooleanSetter = SetState<boolean>;
