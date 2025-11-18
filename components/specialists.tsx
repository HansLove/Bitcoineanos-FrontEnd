"use client";

import { useTranslations } from "next-intl";
import { Cpu, Gem, Brain, Handshake } from "lucide-react";
import { useContactModal } from "@/components/ModalContext";

export function Specialists() {
  const t = useTranslations();
  const { open } = useContactModal();

  const items = [
    { key: "mining", icon: Cpu },
    { key: "scarcity", icon: Gem },
    { key: "mindset", icon: Brain },
    { key: "mentorship", icon: Handshake },
  ];

  return (
    <section id="specialists" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-spaceGrotesk">
            {t("specialists_title")}
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            {t("specialists_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ key, icon: Icon }) => (
            <div key={key} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-6">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transition-opacity group-hover:opacity-80" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="size-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                  <Icon className="text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {t(`specialists_${key}_title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {t(`specialists_${key}_desc` as Parameters<typeof t>[0])}
                  </p>
                  <button
                    onClick={open}
                    className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {t("specialists_cta")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


