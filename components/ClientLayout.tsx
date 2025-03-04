"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import {Navbar} from "@/components/navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar openModal={() => setIsModalOpen(true)} />
      {children}

      {/* Modal global */}
      {isModalOpen && <ContactModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
}
