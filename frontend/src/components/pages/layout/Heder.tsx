import Link from 'next/link';

import './Header.css';

export default function Header() {
  const PAGES = [
    {
      title: 'Incio',
      href: '/',
    },
    {
      title: 'Inscripciones',
      href: '/inscripciones',
    },
    {
      title: 'Programa',
      href: '/programa',
    },
    {
      title: 'Feria de proyectos',
      href: '/feria-de-proyectos',
    },
    {
      title: 'Acerca de',
      href: '/acerca-de',
    },
    {
      title: 'Nosotros',
      href: '/nosotros',
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 flex justify-between items-center px-6 py-3" id="header">
      <Link href="/">
        <img src="/ciis-logo-min.png" alt="ciis logo" className="w-full max-w-52" />
      </Link>
      <nav className="flex gap-8 font-semibold">
        {
          PAGES.map((page) => (
            <Link key={page.href} href={page.href} className="hover:text-muted-foreground">
              {page.title}
            </Link>
          ))
        }
      </nav>
    </header>
  );
}
