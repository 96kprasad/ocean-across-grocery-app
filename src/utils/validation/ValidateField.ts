import validator from "validator";

type ComponentMap = Record<
  string,
  {
    value: string;
  }[]
>;

export const required = (value: unknown): boolean => {
  if (value === undefined || value === null) {
    return false;
  }

  if (!String(value).trim().length) {
    return false;
  }

  if (typeof value !== "string") {
    if (value === 0) {
      return false;
    }
  }

  return true;
};

export const requireArray = (value: unknown[]): boolean => {
  if (value === undefined || value === null) {
    return false;
  }

  if (!value.length) {
    return false;
  }

  if (value.length === 0) {
    return false;
  }

  return true;
};

export const requireArrayGreterthenZero = (
  value: number[]
): boolean => {
  if (value === undefined || value === null) {
    return false;
  }

  if (!value.length) {
    return false;
  }

  if (value.length === 1 && value[0] === 0) {
    return false;
  }

  return true;
};

export const email = (value: unknown): boolean => {
  if (
    value === undefined ||
    value === null ||
    String(value) === ""
  ) {
    return true;
  }

  return validator.isEmail(String(value));
};

export const emailDomain = (value: string): boolean => {
  const domain = `ABC@${value}`;

  if (
    domain === undefined ||
    domain === null ||
    String(domain) === ""
  ) {
    return true;
  }

  return validator.isEmail(domain);
};

export const number = (value: string): boolean => {
  const re = /^[0-9\b]+$/;

  return re.test(value);
};

export const maxLength = (
  value: unknown,
  maxLen: number
): boolean => {
  return String(value).trim().length <= maxLen;
};

export const minLength = (
  value: unknown,
  minLen: number
): boolean => {
  return String(value).trim().length >= minLen;
};

export const compare = (
  value: unknown,
  compareValue: unknown
): boolean => {
  return value === compareValue;
};

export const distinct = (
  value: string,
  compareValue: string
): boolean => {
  if (value !== "") {
    if (value === compareValue) {
      return false;
    }
  }

  return true;
};

export const maxProspects = (
  value: number,
  maxProspectsValue: number
): boolean => {
  return value <= maxProspectsValue;
};

export const minEndDate = (
  date: string | Date,
  minEndDateValue: string | Date
): boolean => {
  return new Date(date) >= new Date(minEndDateValue);
};

export const maxSum = (
  sum: number,
  maxSumValue: number
): boolean => {
  return sum <= maxSumValue;
};

export const password = (
  value: string,
  _props: unknown,
  components: ComponentMap
): boolean | string => {
  if (value !== components["confirm"][0].value) {
    return "Passwords are not equal.";
  }

  return true;
};

export const uniqueIdentifier = (
  value: unknown
): boolean => {
  if (
    value !== undefined &&
    value !== null &&
    String(value).trim().length
  ) {
    const pattern = new RegExp(
      "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
      "i"
    );

    return pattern.test(String(value));
  }

  return true;
};

export const isvalidPassword = (
  value: unknown
): boolean => {
  if (
    value !== undefined &&
    value !== null &&
    String(value).trim().length
  ) {
    const pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    return pattern.test(String(value));
  }

  return true;
};

export const isValidPasswordAdminAccount = (
  value: unknown
): boolean => {
  if (
    value !== undefined &&
    value !== null &&
    String(value).trim().length
  ) {
    const pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})"
    );

    return pattern.test(String(value));
  }

  return true;
};

export const maxNumber = (
  value: number,
  compareValue: number
): boolean => {
  return value <= compareValue;
};

export const minNumber = (
  value: number,
  compareValue: number
): boolean => {
  return value >= compareValue;
};

export const isValidateURL = (
  value: string
): boolean => {
  const pattern = new RegExp(
    "^((https?:)?\\/\\/)?"
      + "(?:\\S+(?::\\S*)?@)?"
      + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"
      + "((\\d{1,3}\\.){3}\\d{1,3}))"
      + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"
      + "(\\?[;&a-z\\d%_.~+=-]*)?"
      + "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return pattern.test(value);
};

export const minDateCheck = (
  value: string
): boolean => {
  const minDate = new Date("1900-01-01");
  const selectedDate = new Date(value);

  return selectedDate >= minDate;
};

export const maxDateCheck = (
  value: string
): boolean => {
  const maxDate = new Date();
  const selectedDate = new Date(value);

  return selectedDate <= maxDate;
};

export const checkValidDateInput = (
  value: unknown
): boolean => {
  if (
    value !== undefined &&
    value !== null &&
    String(value).trim().length
  ) {
    const dateFormatRegex =
      /^\d{4}(\/|-|\.)(0[1-9]|1[0-2])(\/|-|\.)\d{2}$/;

    return dateFormatRegex.test(String(value));
  }

  return true;
};