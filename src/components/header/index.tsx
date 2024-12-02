import DesktopNav from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export default function Header():JSX.Element{
  return (
    <header className="w-full fixed top-0 z-50 bg-white">
      <div className="hidden md:flex">
        <DesktopNav />
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};
