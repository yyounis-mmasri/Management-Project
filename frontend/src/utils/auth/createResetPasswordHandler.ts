import { validateResetPasswordForm } from './validateFormData';

/**
 * Creates a password reset form submission handler
 * @param setError - Error state setter function
 * @param setSuccess - Success state setter function
 * @returns Form submission handler function
 */
export function createResetPasswordHandler(
  setError: (error: string) => void,
  setSuccess: (success: boolean) => void
) {
  return (e: React.FormEvent, email: string) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const validation = validateResetPasswordForm(email);
    
    if (!validation.isValid) {
      setError(validation.errors.email || 'Please enter a valid email address');
      return;
    }

    // In production, this would call an API
    console.log('Password reset requested for:', email);
    setSuccess(true);
  };
}
