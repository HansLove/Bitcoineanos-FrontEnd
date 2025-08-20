"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import {Navbar} from "@/components/navbar";
import { ContactModalContext } from "@/components/ModalContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ open: () => setIsModalOpen(true), close: () => setIsModalOpen(false) }}>
      <Navbar openModal={() => setIsModalOpen(true)} />
      {children}
      {isModalOpen && <ContactModal closeModal={() => setIsModalOpen(false)} />}
    </ContactModalContext.Provider>
  );
}
