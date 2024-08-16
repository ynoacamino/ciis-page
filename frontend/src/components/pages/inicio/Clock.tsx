export default function Clock() {
  return (
    <div className="w-full max-w-6xl flex justify-center items-center py-10">
      <div className="uppercase text-primary flex gap-2 text-sm md:text-xl">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl">00</span>
          <span>Dias</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl">00</span>
          <span>Horas</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl">00</span>
          <span>Minutos</span>
        </div>
        <span className="text-6xl md:text-8xl">:</span>
        <div className="flex flex-col gap-4 items-center">
          <span className="text-6xl md:text-8xl">00</span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
}
