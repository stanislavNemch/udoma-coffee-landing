export type Theme = "light" | "dark";

export type NavLink = {
  label: string;
  href: string;
};

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  hit?: boolean;
};

export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export type FormValues = {
  name: string;
  phone: string;
  message: string;
};

export type FieldName = keyof FormValues;

export type FormErrors = Partial<Record<FieldName, string>>;

export type Status = "idle" | "sending" | "sent";

export type ContactIconKey = "pin" | "clock" | "phone" | "mail";

export type ContactInfoItem = {
  label: string;
  value: string;
  href?: string;
  icon: ContactIconKey;
};

export type SocialKind = "viber" | "telegram";

export type SocialLink = {
  label: string;
  href: string;
  kind: SocialKind;
};
