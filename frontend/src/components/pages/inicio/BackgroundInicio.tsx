import Background from '@/components/ui/Background';

export default function BackgroundInicio() {
  return (
    <Background>
      <img
        alt="Logo de CIIS"
        src="/ciis-logo.png"
        className="w-full max-w-6xl h-auto"
      />
      <div className="w-full max-w-6xl border-b-2 border-b-zinc-950" />
      <h2 className="text-primary text-4xl font-bold text-center">
        06 al 08 DE NOVIEMBRE
      </h2>
      <p className="text-3xl">
        Evento Online
      </p>
      <span>
        BANDERAS
      </span>
    </Background>
  );
}
