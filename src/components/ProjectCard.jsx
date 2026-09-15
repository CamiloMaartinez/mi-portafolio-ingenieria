export default function ProjectCard({ project, destacado }) {
  const fotos = project.fotos || [];
  const ultimaFoto = fotos.length > 0 ? fotos[fotos.length - 1].url : "/images/obras/placeholder.jpg";
  const enlace = "/proyecto/" + project.id;

  const contenedorClases = destacado
    ? "group relative block overflow-hidden bg-antracita md:col-span-2 aspect-16/8"
    : "group relative block overflow-hidden bg-antracita aspect-4/3";

  const tituloClases = destacado
    ? "font-display font-bold leading-tight text-2xl md:text-3xl"
    : "font-display font-bold leading-tight text-lg";

  return (
    <a href={enlace} className={contenedorClases}>
      <img
        src={ultimaFoto}
        alt={project.nombre}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
      />

      <span className="absolute top-3 left-3 bg-seguridad text-antracita text-xs font-bold px-2 py-1">
        {project.categoria}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className={tituloClases}>{project.nombre}</h3>
        <p className="text-sm text-gray-300">{project.ubicacion}</p>
        <p className="text-xs text-gray-400">{project.anio}</p>
      </div>

      <div className="absolute inset-0 bg-seguridad clip-diagonal opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
        <span className="font-display font-bold uppercase text-antracita text-lg">
          Ver ficha técnica
        </span>
      </div>
    </a>
  );
}