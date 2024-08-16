import Link from 'next/link';

export default function Info() {
  return (
    <div className="flex flex-col items-center my-10 w-full max-w-6xl">
      <div className="w-full flex flex-col gap-4 font-bold mb-16">
        <span>
          Todas las actividades se desarrollarán en modalidad online. La participación
          será virtual en la plataforma de videoconferencia.
        </span>
        <span>
          **Programa sujeto a modificaciones.
        </span>
      </div>
      <Link href="/inscripciones" className="uppercase w-full max-w-sm bg-primary text-background flex justify-center py-3 rounded-md hover:bg-primary/90">
        Descarga el Programa aqui
      </Link>
    </div>
  );
}
