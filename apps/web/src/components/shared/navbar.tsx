import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import { Button, H4 } from '../ui';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer';
import Section from '../ui/section';
const Navbar = () => {
   const routes = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Tech Stack',
      href: '/technologies',
    },
    {
      name: 'Education',
      href: '/education',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav className="border-b-4 bg-white">
      <Section className="  flex justify-between items-center">
        <div>
          <Button className="bg-white w-12 h-12 p-3">
            <Image src={logo} alt="My logo" />{' '}
          </Button>
        </div>

        <div className="hidden md:block">
          <ul className="flex   items-center">
            {routes.map((route) => (
              <li key={route.name} className="h-full py-4 px-6  flex items-center hover:bg-main ">
                <Link href={route.href}>
                  <H4>{route.name}</H4>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Drawer direction="left"  >
          <DrawerTrigger className="md:hidden pointer w-16 h-16 p-3">
            <Menu className="w-full h-full" />
          </DrawerTrigger>
          <DrawerContent className="border-r-4 w-[15rem] overflow-hidden">
            <div className="mx-auto w-[24rem] overflow-hidden">
              <DrawerHeader>
                <DrawerTitle className="m-0 p-0 text-left">
                  Najmul Huda Chowdhury
                </DrawerTitle>
              </DrawerHeader>

              <ul className="flex flex-col items-start w-auto  mt-8">
                {routes.map((route) => (
                  <li
                    key={route.name}
                    className={cn(
                      'block border-b-4 border-r-4 border-border p-4 pl-7 text-lg font-base text-foreground/90 hover:bg-main/70   bg-main hover:text-main-foreground w-full ',
                    )}
                  >
                    <Link
                      className="border-none hover:bg- hover:border"
                      href={route.href}
                    >
                      <H4 className="">{route.name}</H4>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="  mx-auto mt-8">
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
