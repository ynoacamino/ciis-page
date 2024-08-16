import BackgroundPrograma from '@/components/pages/programa/BackgroundPrograma';
import Days from '@/components/pages/programa/Days';
import Info from '@/components/pages/programa/Info';

export default function ProgramaPage() {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      <BackgroundPrograma />
      <Info />
      <Days />
    </main>
  );
}
