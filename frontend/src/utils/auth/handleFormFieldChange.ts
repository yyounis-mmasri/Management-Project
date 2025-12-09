import { type ChangeEvent } from 'react';

/**
 * Generic handler for form field changes.
 * Updates a single field in form state.
 */
export function handleFormFieldChange<T>(
  fieldName: keyof T,
  value: string,
  setFormData: React.Dispatch<React.SetStateAction<T>>
): void {
  setFormData((prev) => ({
    ...prev,
    [fieldName]: value,
  }));
}

/**
 * Creates a change handler for a specific field.
 */
export function createFieldChangeHandler<T>(
  fieldName: keyof T,
  setFormData: React.Dispatch<React.SetStateAction<T>>
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };
}

/**
 * Creates a direct value setter for a field.
 */
export function createFieldSetter<T>(
  fieldName: keyof T,
  setFormData: React.Dispatch<React.SetStateAction<T>>
) {
  return (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
}
