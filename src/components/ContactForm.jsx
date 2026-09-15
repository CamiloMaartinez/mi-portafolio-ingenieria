import { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/config.js";

const tiposObra = ["Residencial", "Estructuras", "Interventoría", "Otro"];

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", tipo: tiposObra[0], mensaje: "" });
  const [error, setError] = useState("");

  function actualizar(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function enviar(e) {
    e.preventDefault();

    if (!form.nombre.trim() || !form.mensaje.trim()) {
      setError("Por favor completa tu nombre y una breve descripción.");
      return;
    }
    setError("");

    const texto =
      "Hola, soy " + form.nombre +
      ". Quisiera una cotización para un proyecto de tipo: " + form.tipo +
      ". Detalle: " + form.mensaje;

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={enviar} className="bg-white border border-antracita/10 p-6 max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-antracita mb-1">Nombre</label>
        <input
          type="text"
          value={form.nombre}
          onChange={(e) => actualizar("nombre", e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-seguridad"
          placeholder="Tu nombre"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-antracita mb-1">Tipo de obra</label>
        <select
          value={form.tipo}
          onChange={(e) => actualizar("tipo", e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-seguridad"
        >
          {tiposObra.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-antracita mb-1">Cuéntanos brevemente qué necesitas</label>
        <textarea
          value={form.mensaje}
          onChange={(e) => actualizar("mensaje", e.target.value)}
          rows={4}
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-seguridad"
          placeholder="Ej: necesito diseño estructural para una casa de 2 niveles..."
        />
      </div>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="w-full bg-seguridad text-antracita font-bold py-3 hover:bg-orange-600 transition-colors"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}