/**
 * Authentication form props types
 */

export interface SignInFormProps {
  email: string;
  password: string;
  showPassword: boolean;
  error?: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onToggleShow: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface SignUpFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  showPassword: boolean;
  error?: string;
  onFormChange: (field: string, value: string) => void;
  onToggleShow: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ResetPasswordFormProps {
  email: string;
  error?: string;
  success?: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}
