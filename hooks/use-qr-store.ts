import { QrValue } from "@/utils/types";
import { create } from "zustand";

export const useQrStore = create<{
  values: QrValue;
  updateValues: (newValues: QrValue) => void;
}>()((set) => ({
  values: {
    type: "url",
    value: "https://www.example.com",
  },
  updateValues: (newValues) =>
    set({
      values: newValues,
    }),
}));
