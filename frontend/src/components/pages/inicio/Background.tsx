export default function Background() {
  return (
    <section
      className="bg-zinc-400 flex flex-col items-center justify-center w-full py-44 gap-8 bg-cover"
      style={{ backgroundImage: 'URL(/background.jpeg)' }}
    >
      <img
        alt="Logo de CIIS"
        src="/ciis-logo.png"
        className="w-full max-w-6xl h-auto"
      />
      <div className="w-full max-w-6xl border-b-2 border-b-zinc-950" />
      <h2 className="text-primary text-4xl font-bold">
        06 al 08 DE NOVIEMBRE
      </h2>
      <p className="text-3xl">
        Evento Online
      </p>
      <span>
        BANDERAS
      </span>
    </section>
  );
}
