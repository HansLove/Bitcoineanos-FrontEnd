"use client";

import { useState } from "react";
import { API_URL, SEND_FORM } from "@/utils/routes";
import { toast } from "react-hot-toast";

const ContactModal = ({ closeModal }: { closeModal: () => void }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username.trim()) {
      toast.error("Por favor ingresa tu usuario de Telegram o Instagram");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${SEND_FORM}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("🚀 Registro exitoso. Te contactaremos pronto.");
        closeModal();
      } else {
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      toast.error("❌ Error al enviar datos. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-2xl max-w-md w-full relative">
        {/* Botón para cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-300 hover:text-white"
        >
          ✖
        </button>

        {/* Contenido del modal */}
        <h2 className="text-xl font-bold text-center mb-2 text-white">
          ¿Eres un Bitcoineano?
        </h2>
        <p className="text-gray-200 text-center mb-4">
          Déjanos tu Telegram o Instagram, y te contactamos.
        </p>

        {/* Input con onKeyDown para detectar Enter */}
        <input
          type="text"
          placeholder="@usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown} // Escuchar la tecla Enter
          className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-500 text-white focus:outline-none focus:border-orange-500"
        />

        {/* Botones */}
        <div className="flex justify-between mt-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-700/60 hover:bg-gray-600 rounded-lg text-white"
          >
            Más tarde
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
