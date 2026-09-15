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
      <div className="flex flex-wrap gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiva(cat)}
            className={
              "px-4 py-2 text-sm font-semibold transition-colors " +
              (activa === cat
                ? "bg-seguridad text-antracita"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <p className="text-center text-gray-500">No hay proyectos en esta categoría todavía.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {filtrados.map((p, i) => (
            <ProjectCard key={p.id} project={p} destacado={i === 0} />
          ))}
        </div>
      )}
    </div>
  );
}