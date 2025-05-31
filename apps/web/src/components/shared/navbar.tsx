import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import { H4 } from '../ui';
import { Button } from '../ui';
import Section from '../ui/section';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { HamburgerIcon, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const routes = [
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Technologies',
      href: '/technologies',
    },
  ];
  return (
    <nav className="border-b-4 ">
      <Section className="py-4  flex justify-between items-center">
        <div>
          <Button className="bg-white w-16 h-16 p-3">
            <Image src={logo} alt="My logo" />{' '}
          </Button>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-12 items-center">
            {routes.map((route) => (
              <li key={route.name}>
                <Link href={route.href}>
                  <H4>{route.name}</H4>
                </Link>
              </li>
            ))}
            <li>
              <Button>Downlod Resume</Button>
            </li>
          </ul>
        </div>

        <Drawer direction="left">
          <DrawerTrigger className="md:hidden pointer w-16 h-16 p-3">
            <Menu className="w-full h-full" />
          </DrawerTrigger>
          <DrawerContent className="border-r-4">
            <div className="mx-auto w-[24rem] overflow-hidden">
              <DrawerHeader>
                <DrawerTitle className="m-0 p-0 text-left">
                  Najmul Huda Chowdhury
                </DrawerTitle>
              </DrawerHeader>

              <ul className="flex flex-col items-start w-[17.5rem]  mt-8">
                {routes.map((route) => (
                  <li
                    key={route.name}
                    className={cn(
                      'block border-b-4 border-r-4 border-border p-4 pl-7 text-lg font-base text-foreground/90 hover:bg-main/70   bg-main hover:text-main-foreground w-full ',
                    )}
                  >
                    <Link
                      className="border-none hover:border"
                      href={route.href}
                    >
                      <H4 className="">{route.name}</H4>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="w-[17rem] mx-auto mt-8">
                Download Resume
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </Section>
    </nav>
  );
};

export default Navbar;
