import { Validate, ValidateAll } from "./Validation";

type ValidationError = {
  [key: string]: string;
};

type ValidationState = {
  isValid: boolean;
  error: ValidationError;
};

type ValidationRule = {
  type: string;
  message: string;
};

type ValidationRules = {
  [key: string]: ValidationRule[];
};

type FormDetails = {
  [key: string]: unknown;
};

// validate the whole form
export const isValidForm = (
  formDetails: FormDetails,
  validationRule: ValidationRules,
  validState: ValidationState
): ValidationState => {
  const validation = ValidateAll(
    formDetails,
    validationRule
  ) as ValidationState;

  validState = validation;

  return validState;
};

// validate form fields
export const validate = (
  key: string,
  object: FormDetails,
  validationRule: ValidationRules,
  validState: ValidationState
): ValidationState => {
  const validation = Validate(
    object,
    validationRule,
    key
  ) as ValidationState;

  const newErr = { ...validState.error };

  if (!validation.isValid) {
    newErr[key] = validation.error[key];

    validState = {
      isValid: false,
      error: newErr,
    };
  } else {
    delete newErr[key];

    validState = {
      isValid: true,
      error: newErr,
    };
  }

  return validState;
};