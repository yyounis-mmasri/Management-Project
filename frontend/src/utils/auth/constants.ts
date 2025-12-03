/**
 * Authentication-related constants and configurations.
 */

export const AUTH_CONSTANTS = {
  // Hardcoded demo credentials (for demo purposes only)
  DEMO_EMAIL: 'demo@minimals.cc',
  DEMO_PASSWORD: '@2Minimal',
  
  // Validation rules
  MIN_PASSWORD_LENGTH: 6,
  MAX_PASSWORD_LENGTH: 128,
  
  // UI messages
  MESSAGES: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_REQUIRED: 'Email is required',
    PASSWORD_REQUIRED: 'Password is required',
    WEAK_PASSWORD: 'Password is too weak',
    RESET_EMAIL_SENT: 'Password reset link has been sent to your email',
    ACCOUNT_CREATED: 'Account created successfully',
  },
} as const;

export const PASSWORD_REQUIREMENTS = {
  minLength: 6,
  requireUppercase: false,
  requireLowercase: false,
  requireNumber: false,
  requireSpecialChar: false,
} as const;
