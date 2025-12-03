/**
 * Auth utilities barrel export.
 * Centralizes all authentication-related utility functions.
 */

export { validateCredentials } from './validateCredentials';
export { handleAuthSubmit } from './handleAuthSubmit';
export { 
  handlePasswordToggle, 
  createPasswordToggleHandler 
} from './handlePasswordToggle';
export { 
  validateEmail, 
  getEmailValidationError 
} from './validateEmail';
export { 
  validatePassword, 
  getPasswordValidationError,
  getPasswordStrength 
} from './validatePassword';
export {
  handleFormFieldChange,
  createFieldChangeHandler,
  createFieldSetter,
} from './handleFormFieldChange';
export { AUTH_CONSTANTS, PASSWORD_REQUIREMENTS } from './constants';
