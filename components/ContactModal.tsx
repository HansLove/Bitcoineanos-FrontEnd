"use client";

import { useState } from "react";
import { API_URL, SEND_FORM } from "@/utils/routes";
import { toast } from "react-hot-toast";

const ContactModal = ({ closeModal }: { closeModal: () => void }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [socialUsername, setSocialUsername] = useState("");
  const [bitcoinLifestyle, setBitcoinLifestyle] = useState("");
  const [timeWithBitcoin, setTimeWithBitcoin] = useState("");
  const [isEntrepreneur, setIsEntrepreneur] = useState<string>("");
  const [ventureDescription, setVentureDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) return true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const validateWhatsapp = (value: string) => {
    if (!value) return true;
    const regex = /^[+()\-\s\d]{7,20}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const hasAtLeastOneLead = Boolean(email.trim()) || Boolean(whatsapp.trim());
    if (!hasAtLeastOneLead) {
      toast.error("Por favor ingresa al menos un medio de contacto: WhatsApp o Email");
      return;
    }
    if (email && !validateEmail(email)) {
      toast.error("Ingresa un email válido");
      return;
    }
    if (whatsapp && !validateWhatsapp(whatsapp)) {
      toast.error("Ingresa un WhatsApp válido (puede incluir +, espacios y paréntesis)");
      return;
    }

    const payload = {
      fullName: fullName.trim() || undefined,
      email: email.trim() || undefined,
      whatsapp: whatsapp.trim() || undefined,
      socialUsername: socialUsername.trim() || undefined,
      bitcoinLifestyle: bitcoinLifestyle || undefined,
      timeWithBitcoin: timeWithBitcoin || undefined,
      entrepreneur: isEntrepreneur === "si" ? true : isEntrepreneur === "no" ? false : undefined,
      ventureDescription: ventureDescription.trim() || undefined,
      question: question.trim() || undefined,
      source: "website:newfront",
      system: "Bitcoineanos",
      message: `Nuevo contact de Bitcoineanos.com ${email}`,
      submittedAt: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${SEND_FORM}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: { message?: string } | null = null;
      try {
        data = await response.json();
      } catch {}
      const message = data && typeof data === "object" ? data.message : undefined;

      if (response.ok) {
        toast.success("🚀 Gracias. Te contactaremos muy pronto.");
        closeModal();
      } else {
        toast.error(`Error: ${message || "No se pudo enviar el formulario"}`);
      }
    } catch {
      toast.error("❌ Error al enviar datos. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 p-4">
      <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl w-full max-w-3xl relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl" />
        </div>

        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-300 hover:text-white"
          aria-label="Cerrar"
        >
          ✖
        </button>

        <div className="p-6 md:p-8 relative">
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Conversemos sobre Bitcoin
            </h2>
            <p className="text-gray-300 mt-2">
              Cuéntanos cómo vives el Bitcoin y déjanos tus datos de contacto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Nombre completo (opcional)</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="Satoshi Nakamoto"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="tu@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">WhatsApp</label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="+52 55 1234 5678"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Usuario Telegram/Instagram (opcional)</label>
              <input
                type="text"
                value={socialUsername}
                onChange={(e) => setSocialUsername(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="@usuario"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-gray-300">¿Cómo vives el Bitcoin?</label>
              <select
                value={bitcoinLifestyle}
                onChange={(e) => setBitcoinLifestyle(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
              >
                <option value="" className="text-gray-400">Selecciona una opción</option>
                <option value="ahorro_dca">Ahorro / DCA</option>
                <option value="comerciante">Comerciante: acepto pagos en BTC</option>
                <option value="emprendedor">Emprendo con Bitcoin</option>
                <option value="educador">Educador / divulgador</option>
                <option value="desarrollador">Desarrollador / técnico</option>
                <option value="trader">Trader / especulador</option>
                <option value="minero">Minería</option>
                <option value="recién_comenzando">Recién comenzando</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Tiempo con Bitcoin</label>
              <select
                value={timeWithBitcoin}
                onChange={(e) => setTimeWithBitcoin(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
              >
                <option value="" className="text-gray-400">Selecciona</option>
                <option value="<6m">Menos de 6 meses</option>
                <option value="6-12m">6 a 12 meses</option>
                <option value="1-3y">1 a 3 años</option>
                <option value="3-5y">3 a 5 años</option>
                <option value=">5y">Más de 5 años</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">¿Emprendes con Bitcoin?</label>
              <div className="flex items-center gap-4 h-[52px]">
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="radio"
                    name="entrepreneur"
                    value="si"
                    checked={isEntrepreneur === "si"}
                    onChange={(e) => setIsEntrepreneur(e.target.value)}
                    className="accent-orange-500"
                  />
                  Sí
                </label>
                <label className="flex items-center gap-2 text-gray-300">
                  <input
                    type="radio"
                    name="entrepreneur"
                    value="no"
                    checked={isEntrepreneur === "no"}
                    onChange={(e) => setIsEntrepreneur(e.target.value)}
                    className="accent-orange-500"
                  />
                  No
                </label>
              </div>
            </div>

            {isEntrepreneur === "si" && (
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-gray-300">Cuéntanos de tu proyecto</label>
                <input
                  type="text"
                  value={ventureDescription}
                  onChange={(e) => setVentureDescription(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  placeholder="Producto/servicio, etapa, retos, etc."
                />
              </div>
            )}

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-gray-300">¿Tienes alguna pregunta para nosotros? (opcional)</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800/60 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 min-h-[100px]"
                placeholder="Escríbenos lo que necesites..."
              />
            </div>

            <div className="md:col-span-2 flex justify-between items-center mt-2">
              <p className="text-xs text-gray-400">
                Al enviar nos autorizas a contactarte por los medios proporcionados.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-700/60 hover:bg-gray-600 rounded-lg text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;