import type { FieldName, FormErrors, FormValues } from "../../../shared/types";
import { MESSAGE_LIMIT } from "../../../shared/constants";

export function validateField(
  field: FieldName,
  values: FormValues,
): string | undefined {
  const value = values[field].trim();

  switch (field) {
    case "name":
      if (!value) return "Подскажите имя — как к вам обращаться?";
      if (value.length < 2) return "Имя — минимум два символа.";
      return undefined;
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Нужен номер, чтобы подтвердить бронь.";
      if (!/^(?:7|8)\d{10}$/.test(digits)) {
        return "Похоже, в номере ошибка: +7 и ещё 10 цифр.";
      }
      return undefined;
    }
    case "message":
      if (value.length > MESSAGE_LIMIT) {
        return `Чуть короче — до ${MESSAGE_LIMIT} символов.`;
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
