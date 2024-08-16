import Expositores from './Expositores';
import EjesTematicos from './Ejestematicos';

export default function SobreEvento() {
  return (
    <section className="w-full flex flex-col items-center">
      <header className="w-full bg-primary text-background text-3xl md:text-5xl font-bold py-10 flex items-center justify-center">
        <h1>Sobre del evento</h1>
      </header>
      <main className="w-full max-w-6xl flex flex-col gap-10 items-center text-lg px-6">
        <p className="w-full mt-10">
          El IV Congreso Internacional de Ingeniería de Sistemas (CIIS 2024) de
          la Universidad Nacional de San Agustín de Arequipa es un espacio internacional
          de reflexión académica, práctica e inculcar habilidades blandas; en el cual
          se abordarán temas relacionados a los siguientes ejes temáticos: Tendencias
          de la Ingeniería de Software, Ciberseguridad, Ciencia de datos y aplicaciones
          avanzadas, Inteligencia Artificial y Robótica y Nuevas tecnologías emergentes;
          con foco especial en sus aplicaciones para contribuir con el desarrollo sostenible.
          En ese sentido, invitamos a investigadores, profesionales y estudiantes a
          participar del evento este presente año.
        </p>
        <div className="w-full flex-col gap-10">
          <h2 className="text-3xl font-bold text-primary py-10">
            Información del participante
          </h2>
          <p className="flex flex-col gap-2">
            <span>
              El CIIS 2024 se realizará con forma virtual (online).
            </span>
            <span>
              El presente evento es totalmente gratuito, por lo que los participantes
              deberán inscribirse mediante un formulario.
            </span>
            <span>
              El cierre de inscripciones es el :  05 de noviembre de 2024 (o hasta completar
              el aforo).
            </span>
            <span>
              Asistencia virtual: Los participantes inscritos con opción de asistencia virtual
              emplearán las credenciales enviadas a su correo electrónico para acceder a
              la sala virtual de acuerdo a los horarios del programa.
            </span>
          </p>
        </div>
        <EjesTematicos />
        <div className="w-full flex flex-col gap-10 mb-10">
          <h2 className="text-3xl font-bold text-primary">
            Expositores
          </h2>
          <p className="w-full">
            Como ponentes participarán destacados profesionales expositores académicos
            y de la industria internacionales desde Brasil, Chile, México, Estados Unidos, Perú.
          </p>
        </div>
      </main>
      <Expositores />
    </section>
  );
}
