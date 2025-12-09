/**
 * Validates password strength.
 * Requires at least 6 characters by default.
 */
export function validatePassword(
  password: string,
  minLength: number = 6
): boolean {
  return password.length >= minLength;
}

/**
 * Validates password and returns error message if invalid.
 */
export function getPasswordValidationError(
  password: string,
  minLength: number = 6
): string | null {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters`;
  }
  return null;
}

/**
 * Checks password strength and returns a strength level.
 */
export function getPasswordStrength(password: string): 'weak' | 'medium' | 'strong' {
  if (password.length < 6) return 'weak';
  
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  const strength = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  
  if (strength >= 3 && password.length >= 8) return 'strong';
  if (strength >= 2) return 'medium';
  return 'weak';
}
