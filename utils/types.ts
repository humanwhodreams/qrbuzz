type QrFormats = "phonenumber" | "url" | "plaintext" | "wifi" | "vcard";

type QrValue = {
  type: QrFormats;
  value: string;
};

export type { QrValue };
