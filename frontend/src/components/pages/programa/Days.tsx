import { cn } from '@/lib/utils';

const DAYS = [
  {
    name: 'Dia 1',
    fecha: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
    ],
  },
  {
    name: 'Dia 1',
    fecha: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
    ],
  },
  {
    name: 'Dia 1',
    fecha: '06 DE NOVIEMBRE',
    events: [
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
      {
        hour: '9:00 - 9:30 am',

        description: '<div><p>Director de la Dirección Académica de Ingeniería de Sistemas e Informática</p><br><strong>Ing. Jesús Zúñiga Cueva</strong></div>',
      },
    ],
  },
];

export default function Days() {
  return (
    <section className="w-full">
      {
        DAYS.map((day) => (
          <article key={day.fecha} className="w-full">
            <header className="w-full flex items-center justify-center bg-foreground text-background text-3xl font-bold py-8">
              <div className="w-full max-w-7xl flex items-center justify-between">
                <span>{day.name}</span>
                <span>{day.fecha}</span>
                <div className="hidden md:flex" />
              </div>
            </header>
            <main className="w-full">
              {
                day.events.map((event, i) => (
                  <div key={event.hour} className={cn('w-full grid grid-cols-3 md:grid-cols-2 gap-10 py-8', { 'bg-primary text-background': i % 2 === 0 })}>
                    <div className="w-full flex items-center justify-end">
                      <span>{event.hour}</span>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center col-span-2 md:col-span-1 max-w-lg">
                      <div dangerouslySetInnerHTML={{ __html: event.description }} />
                    </div>
                  </div>
                ))
              }
            </main>
          </article>
        ))
      }
      <article className="w-full flex items-center justify-center p-6">
        <img src="/ciis-logo.png" alt="ciis logo" className="w-full max-w-3xl" />
      </article>
    </section>
  );
}
