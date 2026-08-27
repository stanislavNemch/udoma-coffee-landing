import type { FieldName, FormErrors, FormValues } from "../../../shared/types";
import { MESSAGE_LIMIT } from "../../../shared/constants";

export function validateField(
  field: FieldName,
  values: FormValues,
): string | undefined {
  const value = values[field].trim();

  switch (field) {
    case "name":
      if (!value) return "Підкажіть ім'я — як до вас звертатися?";
      if (value.length < 2) return "Ім'я має містити щонайменше два символи.";
      return undefined;
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Потрібен номер, щоб підтвердити бронювання.";
      if (!/^(?:380\d{9}|0\d{9})$/.test(digits)) {
        return "Схоже, у номері помилка: введіть +380 і 9 цифр або 0 та 9 цифр.";
      }
      return undefined;
    }
    case "message":
      if (value.length > MESSAGE_LIMIT) {
        return `Трохи коротше — до ${MESSAGE_LIMIT} символів.`;
      }
      return undefined;
  }
}

export function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as FieldName[]).forEach((field) => {
    const error = validateField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}
