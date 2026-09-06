export default function ProjectCard({ project }) {
  const ultimaFoto = project.fotos && project.fotos.length > 0
    ? project.fotos[project.fotos.length - 1].url
    : "/images/obras/placeholder.jpg";

  const enlace = "/proyecto/" + project.id;

  return (
    <a href={enlace} className="group block bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow border border-gray-100">
      <div className="aspect-video overflow-hidden bg-gray-200">
        <img
          src={ultimaFoto}
          alt={project.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-semibold text-estructural bg-blue-50 px-2 py-1 rounded">
          {project.categoria}
        </span>
        <h3 className="mt-2 font-bold text-antracita">{project.nombre}</h3>
        <p className="text-sm text-gray-500">{project.ubicacion} · {project.anio}</p>
      </div>
    </a>
  );
}