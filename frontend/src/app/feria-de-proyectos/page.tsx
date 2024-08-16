import BackgroundFeria from '@/components/pages/feria-de-proyectos/BackgroundFeria';
import InfoFeria from '@/components/pages/feria-de-proyectos/InfoFeria';

export default function FeriaPage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <BackgroundFeria />
      <InfoFeria />
    </main>
  );
}
