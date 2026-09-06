import { useState, useMemo } from "react";
import proyectos from "../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";

export default function Portfolio() {
  const categorias = useMemo(() => {
    const unicas = new Set(proyectos.map((p) => p.categoria));
    return ["Todos", ...unicas];
  }, []);

  const [activa, setActiva] = useState("Todos");

  const filtrados = useMemo(() => {
    if (activa === "Todos") return proyectos;
    return proyectos.filter((p) => p.categoria === activa);
  }, [activa]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activa === cat
                ? "bg-seguridad text-antracita"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <p className="text-center text-gray-500">No hay proyectos en esta categoría todavía.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrados.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}