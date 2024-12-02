'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationItem {
  title: string;
  href: string;
}

const navigationMenu: NavigationItem[] = [
  {
    title: 'Home',
    href: 'technologies',
  },
  {
    title: 'Sobre nós',
    href: 'clients',
  },
  {
    title: 'Planos',
    href: '/about-us',
  },
];

export default function DesktopNav():JSX.Element {
  const [isVisible, setIsVisible] = React.useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.scrollY <= 100);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <div
      className={`w-full flex h-20 items-center justify-between fixed bg-white shadow-md transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center ml-5">
        <Link href="/" className="flex items-center">
          <Image
            alt="Queiroz Fit"
            src={'/image/logo-queiroz.png'}
            height={40}
            width={156}
          />
        </Link>
      </div>
      <nav className="flex gap-4">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            {navigationMenu.map((nav) => (
              <NavigationMenuItem key={nav.title}>
                <Link
                  href={nav.href}
                  className="font-semibold flex items-center gap-1 text-[17px] hover:underline"
                >
                  {nav.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button className="mr-4 text-base bg-primary">
            <Link href="/contact">Agende uma ligação</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
