import { useState } from "react";

export default function Gallery({ fotos }) {
  const [activa, setActiva] = useState(0);

  if (!fotos || fotos.length === 0) {
    return (
      <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
        Sin fotografías disponibles
      </div>
    );
  }

  return (
    <div>
      <div className="aspect-video rounded-xl overflow-hidden bg-gray-200 mb-4">
        <img
          src={fotos[activa].url}
          alt={"Foto " + (activa + 1)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {fotos.map((foto, i) => (
          <button
            key={i}
            onClick={() => setActiva(i)}
            className={
              "shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 " +
              (activa === i ? "border-seguridad" : "border-transparent")
            }
          >
            <img src={foto.url} alt={foto.fase} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}