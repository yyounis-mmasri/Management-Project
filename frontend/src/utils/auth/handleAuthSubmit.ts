import { type FormEvent } from 'react';

/**
 * Handles authentication form submission.
 * Prevents default behavior and executes callback with form data.
 */
export function handleAuthSubmit<T>(
  e: FormEvent,
  data: T,
  onSuccess: (data: T) => void,
  onError?: (error: string) => void
): void {
  e.preventDefault();
  
  try {
    onSuccess(data);
  } catch (error) {
    if (onError) {
      onError(error instanceof Error ? error.message : 'An error occurred');
    }
  }
}
