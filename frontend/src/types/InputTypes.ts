/**
 * Common input component props
 */

import { type ChangeEvent, type FocusEvent } from 'react';

export interface BaseInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}

export interface TextInputProps extends BaseInputProps {
  type?: 'text' | 'email' | 'tel' | 'url';
  maxLength?: number;
  minLength?: number;
}

export interface PasswordInputProps extends BaseInputProps {
  showPassword?: boolean;
  onToggleShow?: () => void;
  strengthIndicator?: boolean;
}

export interface FormGroupProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}
