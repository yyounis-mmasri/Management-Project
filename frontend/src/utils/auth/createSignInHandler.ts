import type { NavigateFunction } from 'react-router-dom';
import { validateCredentials, AUTH_CONSTANTS } from './index';

/**
 * Creates a sign-in form submission handler
 * @param login - Authentication context login function
 * @param navigate - React Router navigate function
 * @param setError - Error state setter function
 * @returns Form submission handler function
 */
export function createSignInHandler(
  login: () => void,
  navigate: NavigateFunction,
  setError: (error: string) => void
) {
  return (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    setError('');

    if (validateCredentials(email, password)) {
      login();
      navigate('/kanban', { replace: true });
    } else {
      setError(AUTH_CONSTANTS.MESSAGES.INVALID_CREDENTIALS);
    }
  };
}
