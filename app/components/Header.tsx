'use client';
import Image from "next/image";
import Navigation from "./Navigation";
import Button from "./Button";
export default function Header() {
  const alart = () => {
    console.log('test successfull!');
  }
  return (
    <header className="px-6 py-2 hidden md:flex items-center justify-between">
      <Image src="/logo.svg" width={32} height={32} alt="@najmulhc logo" />
      <Navigation />
      <Button onlick={() =>alart()}>Download Resume</Button>
    </header>
  );
}
