import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';
import type { SignUpFormData, SignInFormData, ValidationResult } from '../../types/auth';

/**
 * Validates sign-up form data
 * @param data - Sign-up form data
 * @returns Validation result with errors object
 */
export function validateSignUpForm(data: SignUpFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate first name
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  } else if (data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  // Validate last name
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  } else if (data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  // Validate email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate password
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates sign-in form data
 * @param data - Sign-in form data
 * @returns Validation result with errors object
 */
export function validateSignInForm(data: SignInFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate password
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates password reset form data
 * @param email - Email address
 * @returns Validation result with errors object
 */
export function validateResetPasswordForm(email: string): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate email
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
