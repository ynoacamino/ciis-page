import BackgroundInscripciones from '@/components/pages/inscripciones/BackgroundInscripciones';
import Info from '@/components/pages/inscripciones/Info';

export default function InscripcionesPage() {
  return (
    <main className="flex flex-col items-center justify-start">
      <BackgroundInscripciones />
      <Info />
    </main>
  );
}
