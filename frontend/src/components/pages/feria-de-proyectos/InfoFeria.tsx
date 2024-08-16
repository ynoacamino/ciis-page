import Link from 'next/link';

export default function InfoFeria() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-16 my-16">
      <section className="w-full max-w-5xl flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-bold">
          Feria de Proyectos de Investigación 2024
        </h2>
        <p className="leading-10">
          El presente concurso tiene por objetivo motivar en nuestros estudiantes la investigación
          en proyectos realistas, poniendo en práctica los conocimientos adquiridos en función de
          competencias y capacidades durante su formación para la solución de problemas de
          ingeniería,
          bajo restricciones reales de funcionamiento; así mismo consolidar en los estudiantes
          habilidades blandas como el trabajo en equipo, niveles de comunicación, liderazgo,
          organización entre otras. Finalmente generar las evidencias apropiadas en los procesos
          de mejora continua y aseguramiento de la calidad.
        </p>
      </section>
      <Link href="https://sites.google.com/unsa.edu.pe/feriadeproyectos2023/" className="uppercase w-full max-w-sm bg-primary text-background flex justify-center py-3 rounded-md hover:bg-primary/90">
        Ir a página web de Feria de Proyectos
      </Link>
    </div>
  );
}
