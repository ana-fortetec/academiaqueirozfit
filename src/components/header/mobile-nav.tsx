'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useRouter } from 'next/navigation';

interface NavigationItem {
  title: string;
  href: string;
}

const navigationMenu: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
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

export function MobileNav() {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div
      className={`w-full flex h-20 items-center justify-between px-3 fixed bg-white shadow-md transition-transform md:hidden duration-300 ease-in-out  ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            alt="Forte Tecnologias"
            src={'/image/logo-queiroz.png'}
            height={40}
            width={150}
          />
        </Link>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="text-center md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[230px] sm:w-[400px] overflow-y-auto rounded-tl-lg flex flex-col items-center"
        >
          <nav className="flex flex-col gap-2 pt-5 text-center">
            <NavigationMenu className="pl-3">
              <NavigationMenuList className="flex flex-col gap-5 items-center">
                {navigationMenu.map((nav) => (
                  <NavigationMenuItem key={nav.title} className="text-center">
                    <button
                      onClick={() => handleNavigation(nav.href)}
                      className="font-medium flex items-center gap-1 text-lg hover:underline text-center"
                    >
                      {nav.title}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="w-full py-4"
              onClick={() => handleNavigation('/contact')}
            >
              Agende uma ligação
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
