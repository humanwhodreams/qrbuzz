type QrValue = {
  type: "phonenumber" | "url" | "plaintext" | "wifi" | "vcard";
  value: string;
};

type NavItem = {
  label: string;
  href: string;
};

export type { QrValue, NavItem };
