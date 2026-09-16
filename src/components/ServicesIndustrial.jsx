import { motion, useReducedMotion } from "framer-motion";
import { EMAIL_CONTACTO } from "../data/config.js";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const servicios = [
  {
    codigo: "SRV-01",
    categoria: "Diseno y Analisis",
    nivel: "Alta Complejidad",
    titulo: "Calculo y Modelado Estructural Sismorresistente",
    descripcion:
      "Diseno estructural integral en concreto armado, acero laminado y secciones compuestas. Modelacion no lineal, espectros de sitio y control estricto de derivas de entrepiso.",
    matriz: [
      { label: "Alcance principal", valor: "Torres, naves y puentes" },
      { label: "Normativa aplicada", valor: "ACI 318-19 / AISC 360" },
    ],
    herramientas: "ETABS Ultimate / SAP2000 / SAFE",
    entregables: [
      "Memoria de calculo y analisis modal espectral sellada",
      "Planos estructurales de detalle para taller y armadura",
      "Planillas de cuantificacion de acero y hormigon",
    ],
    tiempo: "Tiempo estimado: 3-6 semanas",
    cta: "Solicitar cotizacion",
  },
  {
    codigo: "SRV-02",
    categoria: "Diagnostico y Patologia",
    nivel: "Forense",
    titulo: "Peritajes Estructurales y Auditoria Tecnica",
    descripcion:
      "Evaluacion forense de danos por sismos, asentamientos diferenciales, sobrecargas o corrosion acelerada. Dictamen tecnico y refuerzo con CFRP o encamisado de acero.",
    matriz: [
      { label: "Metodologia de ensayos", valor: "Esclerometria / Ultrasonido" },
      { label: "Normativa rehabilitacion", valor: "ACI 562 / FEMA P-58" },
    ],
    herramientas: "Edificaciones existentes y cambios de uso",
    entregables: [
      "Informe pericial de vulnerabilidad y capacidad residual",
      "Alternativas tecnico-economicas de consolidacion",
      "Firma pericial colegiada para aseguradoras o municipios",
    ],
    tiempo: "Respuesta urgente: menos de 72 horas",
    cta: "Solicitar peritaje",
  },
  {
    codigo: "SRV-03",
    categoria: "Valor Agregado",
    nivel: "Value Engineering",
    titulo: "Optimizacion Estructural y Value Engineering",
    descripcion:
      "Revision de proyectos existentes de terceros para identificar sobredimensionamientos, optimizar cuantias de acero y aligerar secciones sin comprometer la seguridad.",
    matriz: [
      { label: "Ahorro tipico logrado", valor: "12% a 22% en costo de acero" },
      { label: "Tipo de analisis", valor: "Reingenieria de cuantias" },
    ],
    herramientas: "Tarifa fija o bono por ahorro real",
    entregables: [
      "Matriz comparativa de costos y ahorro de volumen",
      "Re-diseno optimizado con justificacion analitica",
    ],
    tiempo: "ROI directo inmediato",
    cta: "Evaluar proyecto",
  },
  {
    codigo: "SRV-04",
    categoria: "BIM y Constructibilidad",
    nivel: "Nivel LOD 400",
    titulo: "Modelado BIM Estructural y Direccion Tecnica",
    descripcion:
      "Integracion de estructuras en Revit y Tekla Structures con deteccion parametrica de interferencias MEP. Supervision en obra para asegurar el vaciado conforme a plano.",
    matriz: [
      { label: "Modelado parametrico", valor: "Revit Structure / Tekla" },
      { label: "Deteccion de choques", valor: "Navisworks Manage" },
    ],
    herramientas: "Visitas de hito y control de enfierradura",
    entregables: [
      "Modelo federado .IFC / .RVT con armadura LOD 350-400",
      "Protocolos de liberacion tecnica pre-vaciado",
    ],
    tiempo: "Coordinacion multidisciplinar",
    cta: "Consultar servicio",
  },
];

const flujo = [
  {
    fase: "Fase 01",
    titulo: "Recopilacion y Criterios de Diseno",
    desc: "Revision del estudio de mecanica de suelos, topografia y definicion de coeficientes sismicos de sitio.",
  },
  {
    fase: "Fase 02",
    titulo: "Modelado Matematico y Analisis Dinamico",
    desc: "Simulacion tridimensional, analisis P-Delta y distribucion de esfuerzos principales.",
  },
  {
    fase: "Fase 03",
    titulo: "Planos Ejecutivos y Memoria de Calculo",
    desc: "Planos constructivos con armaduras exactas y memoria explicativa para tramitacion de licencias.",
  },
  {
    fase: "Fase 04",
    titulo: "Supervision en Terreno y Liberacion",
    desc: "Inspeccion de zapatas, columnas y losas antes del colado para garantizar apego al proyecto.",
  },
];

function useReveal(reduce) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const rise = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.3 : 0.55, ease: EASE_OUT_EXPO },
    },
  };
  const slide = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0.3 : 0.6, ease: EASE_OUT_EXPO },
    },
  };
  return { container, rise, slide };
}

export default function ServicesIndustrial() {
  const reduce = useReducedMotion();
  const { container, rise, slide } = useReveal(reduce);

  return (
    <section id="servicios" className="bg-antracita text-white">
      <div className="px-4 md:px-12 lg:px-16 pt-16 pb-10 border-b border-acero/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={rise}
          className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-white/50 uppercase mb-3"
        >
          <span className="inline-block w-1.5 h-1.5 bg-seguridad" />
          <span>Capacidad Tecnica</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slide}
          className="inline-block bg-seguridad px-5 py-2.5 mb-4 clip-diagonal"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl text-antracita tracking-tight uppercase leading-none">
            Servicios y Especialidades
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rise}
          className="text-white/80 font-light text-sm leading-relaxed max-w-xl"
        >
          Ingenieria consultiva de alto rigor tecnico orientada a la seguridad
          sismorresistente y la viabilidad constructiva bajo normativas
          internacionales.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className="px-4 md:px-12 lg:px-16 py-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full"
      >
        {servicios.map((s) => (
          <motion.article
            key={s.codigo}
            variants={rise}
            className="group border border-acero/60 bg-[#1c1b20] p-5 transition-colors duration-200 hover:border-seguridad/70"
          >
            <div className="flex items-center justify-between border-b border-acero/40 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-seguridad" />
                <span className="font-mono text-xs font-bold tracking-widest text-seguridad">
                  {s.codigo}
                </span>
                <span className="text-white/40 font-mono text-xs">/</span>
                <span className="font-mono text-[11px] text-white/60 uppercase">
                  {s.categoria}
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/40 uppercase">
                {s.nivel}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl text-white tracking-wide uppercase leading-tight mb-2">
              {s.titulo}
            </h3>

            <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed mb-5">
              {s.descripcion}
            </p>

            <div className="grid grid-cols-2 gap-2 p-3 bg-antracita border border-acero/40 font-mono text-[11px] mb-5">
              {s.matriz.map((m) => (
                <div key={m.label}>
                  <span className="text-white/45 block text-[9px] uppercase tracking-wider mb-0.5">
                    {m.label}
                  </span>
                  <span className="text-seguridad font-medium">{m.valor}</span>
                </div>
              ))}
              <div className="col-span-2 pt-2 border-t border-acero/30 flex justify-between items-center">
                <span className="text-white/45 text-[9px] uppercase tracking-wider">
                  Detalle
                </span>
                <span className="text-white/80 text-[10px]">
                  {s.herramientas}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <span className="block font-mono text-[10px] tracking-widest text-white/50 uppercase mb-2">
                Entregables incluidos
              </span>
              <ul className="space-y-1.5 font-mono text-[11px] text-white/80">
                {s.entregables.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <span className="text-seguridad font-bold">&gt;</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-acero/40 flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] text-white/50">
                {s.tiempo}
              </span>
              <a
                href="#contacto"
                className="font-mono text-xs text-seguridad hover:text-white flex items-center gap-1 font-semibold uppercase tracking-wider shrink-0 transition-colors duration-150"
              >
                <span>{s.cta}</span>
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
                  &gt;
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="px-4 md:px-12 lg:px-16 py-10 border-y border-acero/50 bg-[#151417]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={rise}
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-seguridad uppercase mb-2"
          >
            <span className="w-1.5 h-1.5 bg-seguridad" />
            <span>Protocolo de Ingenieria</span>
          </motion.div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={rise}
            className="font-display font-black text-2xl text-white uppercase tracking-wider mb-6"
          >
            Flujo de Trabajo Estructural
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="space-y-4"
          >
            {flujo.map((f, i) => (
              <motion.div
                key={f.fase}
                variants={slide}
                className={
                  "pl-4 py-1 border-l-2 " +
                  (i === 0 ? "border-seguridad" : "border-acero")
                }
              >
                <div
                  className={
                    "font-mono text-[10px] font-bold " +
                    (i === 0 ? "text-seguridad" : "text-white/50")
                  }
                >
                  {f.fase}
                </div>
                <div className="font-display font-black text-lg uppercase text-white">
                  {f.titulo}
                </div>
                <p className="text-white/60 text-xs font-light mt-1">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={rise}
        className="px-4 md:px-12 lg:px-16 py-10 max-w-3xl mx-auto w-full"
      >
        <div className="border-2 border-seguridad bg-[#1a191e] p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-seguridad text-antracita font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
            Consultoria Directa
          </div>

          <span className="font-mono text-[10px] text-seguridad uppercase tracking-widest block mb-1">
            Consultoria Directa
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2 leading-none">
            Quieres validar o disenar una estructura?
          </h3>
          <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed mb-5">
            Evaluacion de viabilidad, optimizacion de acero y modelado con
            estricto apego a normativa. Respuesta en 24 a 48 horas.
          </p>

          <a
            href={`mailto:${EMAIL_CONTACTO}`}
            className="block w-full text-center bg-seguridad text-antracita font-display font-black text-lg sm:text-xl py-3 tracking-wider uppercase transition-transform duration-150 hover:bg-orange-600 active:scale-[0.98]"
          >
            Solicitar Propuesta Tecnica &gt;
          </a>
        </div>
      </motion.div>
    </section>
  );
}
