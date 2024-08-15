import Link from 'next/link';

import TwitterIcon from '@/components/icons/TwitterIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';

const EXPOSITORES = [
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },

  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
  {
    fullName: 'Ponente',
    description: 'Doctor en Ciencias Mención Computación, Universidad de Chile. Vicepresidente de la Sociedad Colombiana de Computación - Universidad del Cauca',
    imageUrl: '/ponente.jpg',
  },
];

export default function Expositores() {
  return (
    <div className="w-full bg-primary flex justify-center p-6">
      <div className="w-full max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
        EXPOSITORES.map((expositor) => (
          <div key={crypto.randomUUID()} className="flex gap-4 items-center flex-col">
            <img src={expositor.imageUrl} alt={expositor.fullName} />
            <div className="flex flex-col gap-4 px-2">
              <span className="w-full text-start font-bold text-background text-xl">
                {expositor.fullName}
              </span>
              <p className="text-background">
                {expositor.description}
              </p>
              <div className="flex gap-2 text-background w-full justify-start">
                <Link href="/" className="bg-zinc-500 rounded-full p-1">
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link href="/" className="bg-zinc-500 rounded-full p-1">
                  <span className="sr-only">Linkedin</span>
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}
