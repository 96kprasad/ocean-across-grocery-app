import { CommonValidationMessages } from '../Message';

type ValidationRule = {
  type: string;
  message: string;
};

type ValidationRules = {
  [key: string]: ValidationRule[];
};

// Login Validation Rule
export const LoginValidationRules: ValidationRules = {
  email: [
    {
      type: 'require',
      message: CommonValidationMessages.FieldRequired.replace('{0}', 'email'),
    },
    {
      type: 'email',
      message: CommonValidationMessages.FieldRequired.replace(
        '{0}',
        'valid email address'
      ),
    },
  ],
  password: [
    {
      type: 'require',
      message: CommonValidationMessages.FieldRequired.replace(
        '{0}',
        'password'
      ),
    },
  ],
};

// Signup Validation Rule
export const SignupValidationRules: ValidationRules = {
  name: [
    {
      type: 'require',
      message: CommonValidationMessages.FieldRequired.replace(
        '{0}',
        'name'
      ),
    },
  ],
  email: [
    {
      type: 'require',
      message: CommonValidationMessages.FieldRequired.replace('{0}', 'email'),
    },
    {
      type: 'email',
      message: CommonValidationMessages.FieldRequired.replace(
        '{0}',
        'valid email address'
      ),
    },
  ],

  password: [
    {
      type: 'require',
      message: CommonValidationMessages.FieldRequired.replace(
        '{0}',
        'password'
      ),
    },
  ],
};
