import type { NavigateFunction } from 'react-router-dom';
import type { SignUpFormData, FormErrors } from '../../types/auth';
import { validateSignUpForm } from './validateFormData';

/**
 * Creates a sign-up form submission handler
 * @param login - Authentication context login function
 * @param navigate - React Router navigate function
 * @param setErrors - Error state setter function
 * @returns Form submission handler function
 */
export function createSignUpHandler(
  login: () => void,
  navigate: NavigateFunction,
  setErrors: (errors: FormErrors) => void
) {
  return (e: React.FormEvent, formData: SignUpFormData) => {
    e.preventDefault();
    setErrors({});

    const validation = validateSignUpForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // In production, this would call an API
    console.log('Sign up successful:', formData);
    login();
    navigate('/kanban', { replace: true });
  };
}
