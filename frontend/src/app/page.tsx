import BackgroundInicio from '@/components/pages/inicio/BackgroundInicio';
import Clock from '@/components/pages/inicio/Clock';
import Objetivo from '@/components/pages/inicio/Objetivo';
import SobreEvento from '@/components/pages/inicio/SobreEvento';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <BackgroundInicio />
      <Clock />
      <Objetivo />
      <SobreEvento />
    </main>
  );
}
