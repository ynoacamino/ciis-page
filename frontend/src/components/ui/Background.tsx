export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="bg-zinc-400 flex flex-col items-center justify-center w-full py-44 gap-8 bg-cover px-6 border-b border-b-zinc-300"
      style={{ backgroundImage: 'URL(/background.jpeg)' }}
    >
      {children}
    </section>
  );
}
