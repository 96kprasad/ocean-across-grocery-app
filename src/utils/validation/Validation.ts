import {
  compare,
  email,
  required,
  uniqueIdentifier,
  isvalidPassword,
  maxLength,
  minLength,
  maxProspects,
  minEndDate,
  maxSum,
  distinct,
  requireArray,
  requireArrayGreterthenZero,
  minNumber,
  maxNumber,
  emailDomain,
  isValidateURL,
  isValidPasswordAdminAccount,
  minDateCheck,
  checkValidDateInput,
} from './ValidateField';

type ValidationResult = {
  isValid: boolean;
  error: Record<string, string>;
};

type FieldValidationResult = {
  isvalid: boolean;
  message: string;
};

type ValidationRule = {
  type: string;
  message: string;
  compareEle?: string;
  distinctEle?: string;
  maxLength?: number;
  minLength?: number;
  maxProspects?: number;
  minEndDate?: string;
  maxSum?: number;
};

type ValidationRules = {
  [key: string]: ValidationRule[];
};

type ValidationState = {
  [key: string]: any;
};

export function ValidateAll(
  state: ValidationState,
  rules: ValidationRules
): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    error: {},
  };

  const keys = Object.keys(rules);
  const error: Record<string, string> = {};

  keys.forEach((key) => {
    const fieldRules = rules[key];
    const validateResult = ValidateField(
      state[key],
      fieldRules,
      state
    );

    if (!validateResult.isvalid) {
      result.isValid = false;
      error[key] = validateResult.message;
    }
  });

  result.error = error;

  return result;
}

export function Validate(
  state: ValidationState,
  rules: ValidationRules,
  key: string
): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    error: {},
  };

  const error: Record<string, string> = {};

  const fieldRules = rules[key];

  const validateResult = ValidateField(
    state[key],
    fieldRules,
    state
  );

  if (!validateResult.isvalid) {
    result.isValid = false;
    error[key] = validateResult.message;
  }

  result.error = error;

  return result;
}

export function ValidateField(
  value: any,
  fieldRules: ValidationRule[],
  state: ValidationState
): FieldValidationResult {
  const result: FieldValidationResult = {
    isvalid: true,
    message: '',
  };

  fieldRules.forEach((rule) => {
    if (result.isvalid) {
      switch (rule.type) {
        case 'require':
          if (!required(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'requireArray':
          if (!requireArray(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'requireArrayGreterthenZero':
          if (!requireArrayGreterthenZero(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'email':
          if (!email(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'password':
          if (!isvalidPassword(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'adminAccountPassword':
          if (!isValidPasswordAdminAccount(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'compare':
          if (!compare(value, state[rule.compareEle!])) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'distinct':
          if (!distinct(value, state[rule.distinctEle!])) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'number':
          if (isNaN(Number(value))) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'uniqueIdentifier':
          if (!uniqueIdentifier(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'maxLength':
          if (!maxLength(value, rule.maxLength!)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'minLength':
          if (!minLength(value, rule.minLength!)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'maxProspects':
          if (!maxProspects(value, rule.maxProspects!)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'minEndDate':
          if (!minEndDate(value, state[rule.minEndDate!])) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'maxSum':
          if (!maxSum(value, rule.maxSum!)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'maxNumber':
          if (!maxNumber(value, state[rule.compareEle!])) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'minNumber':
          if (!minNumber(value, state[rule.compareEle!])) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'emailDomain':
          if (!emailDomain(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'isValidateURL':
          if (!isValidateURL(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'isMinDate':
          if (!minDateCheck(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        case 'isDateValid':
          if (!checkValidDateInput(value)) {
            result.isvalid = false;
            result.message = rule.message;
          }
          break;

        default:
          return;
      }
    }
  });

  return result;
}

