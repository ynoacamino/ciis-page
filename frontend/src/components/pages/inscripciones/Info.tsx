import Link from 'next/link';

export default function Info() {
  return (
    <section className="w-full max-w-6xl gap-12 flex flex-col my-12">
      <div className="flex flex-col gap-4">
        <span>
          El CIIS 2024 se realizará con forma virtual (online).
        </span>
        <span>
          El presente evento es totalmente gratuito, por lo que los participantes deberán
          inscribirse mediante un formulario.
        </span>
      </div>
      <div className="flex w-full justify-center items-center py-2">
        <Link href="/inscripciones" className="uppercase w-full max-w-sm bg-primary text-background flex justify-center py-3 rounded-md hover:bg-primary/90">
          Inscripciones aqui
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <span>
          El cierre de inscripciones es el :  05 de NOVIEMBRE de 2024 (o hasta completar el aforo).
        </span>
        <span>
          Asistencia virtual: Los participantes inscritos con opción de asistencia
          virtual emplearán las credenciales enviadas a su correo electrónico para
          acceder a la sala virtual de acuerdo a los horarios del programa.
        </span>
      </div>
    </section>
  );
}
