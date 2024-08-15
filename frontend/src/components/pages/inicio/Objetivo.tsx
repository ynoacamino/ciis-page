export default function Objetivo() {
  return (
    <section className="w-full flex flex-col items-center">
      <header className="w-full bg-primary text-background text-5xl font-bold py-10 flex items-center justify-center">
        <h1>Objetivo</h1>
      </header>
      <main className="w-full max-w-6xl flex md:flex-row flex-col gap-10 items-center py-10">
        <p className="w-full text-lg">
          El objetivo principal es fomentar el intercambio de experiencias en los distintos
          ámbitos profesionales que exige la aplicación, desarrollo de software y el uso de
          tecnologías de información emergentes a través del IV Congreso Internacional de la
          Escuela Profesional de Ingeniería de Sistemas – CIIS 2024.
        </p>
        <img src="/objetivo.png" alt="" className="w-72 aspect-square" />
      </main>
    </section>
  );
}
