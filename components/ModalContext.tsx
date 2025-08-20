"use client";

import { createContext, useContext } from "react";

type ContactModalContextValue = {
  open: () => void;
  close: () => void;
};

export const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal debe usarse dentro de ContactModalContext.Provider");
  }
  return ctx;
}


