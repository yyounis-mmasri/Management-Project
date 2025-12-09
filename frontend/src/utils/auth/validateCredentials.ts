/**
 * Validates login credentials against hardcoded values.
 * In production, this would call an API endpoint.
 */
export function validateCredentials(
  email: string,
  password: string,
  validEmail: string = 'demo@minimals.cc',
  validPassword: string = '@2Minimal'
): boolean {
  return email === validEmail && password === validPassword;
}
