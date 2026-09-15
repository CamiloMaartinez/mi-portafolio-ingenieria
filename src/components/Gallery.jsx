import { useState } from "react";

export default function Gallery({ fotos }) {
  const [activa, setActiva] = useState(0);

  if (!fotos || fotos.length === 0) {
    return (
      <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500">
        Sin fotografías disponibles
      </div>
    );
  }

  return (
    <div>
      <div className="aspect-video overflow-hidden bg-gray-200 mb-3">
        <img
          src={fotos[activa].url}
          alt={"Foto " + (activa + 1)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {fotos.map((foto, i) => {
          const activo = activa === i;
          const borde = activo ? "border-b-4 border-seguridad" : "border-b-4 border-transparent";
          return (
            <button
              key={i}
              onClick={() => setActiva(i)}
              className={"shrink-0 w-24 h-16 overflow-hidden " + borde}
            >
              <img src={foto.url} alt={foto.fase} className="w-full h-full object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
}