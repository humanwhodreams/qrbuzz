import { QrValue } from "./types";

const QrPhoneNumber = (phoneNumber: string): QrValue => ({
  type: "phonenumber",
  value: `tel:${phoneNumber};`,
});

const QrURL = (url: string): QrValue => ({
  type: "url",
  value: `${url}`,
});

const QrWiFi = (
  ssid: string,
  hidden: boolean | undefined,
  password: string,
  encryption: "WEP" | "WPA" | "blank"
): QrValue => ({
  type: "wifi",
  value: `WIFI:S:${ssid};T:${encryption}P:${password};H:${hidden};`,
});

const QrPlainText = (text: string): QrValue => ({
  type: "plaintext",
  value: `${text}`,
});

const QrVCard = (
  forename: string,
  surname: string,
  mobile: string,
  street: string,
  city: string,
  zip: string,
  state: string,
  country: string,
  email: string,
  phone?: string,
  fax?: string,
  company?: string,
  job?: string,
  website?: string
): QrValue => ({
  type: "vcard",
  value: `BEGIN:VCARD
VERSION:3.0
N:${surname};${forename}
FN:${forename} ${surname}
ORG:${company}
TITLE:${job}
TEL;TYPE=CELL:${mobile}
TEL;TYPE=WORK:${phone}
TEL;TYPE=FAX:${fax}
ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}
EMAIL;WORK;INTERNET:${email}
URL:${website}
END:VCARD`,
});

export { QrPhoneNumber, QrURL, QrPlainText, QrVCard, QrWiFi };
