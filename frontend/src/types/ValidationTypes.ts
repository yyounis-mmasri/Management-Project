/**
 * Form validation error types
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
  general?: string;
}

export type ValidationResult = {
  isValid: boolean;
  errors: FormErrors;
};

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: string) => string | null;
}
