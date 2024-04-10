import { QrValue } from "@/utils/types";
import { create } from "zustand";

export const useQrStore = create<{
  values: QrValue;
  updateValues: (newValues: QrValue) => void;
}>()((set) => ({
  values: {
    type: "url",
    value: "",
  },
  updateValues: (newValues) =>
    set({
      values: newValues,
    }),
}));
