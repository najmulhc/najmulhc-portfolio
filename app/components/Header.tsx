'use client';
import Image from "next/image";
import Navigation from "./Navigation";
import Button from "./Button";
export default function Header() {
  const alart = () => {
    console.log('test successfull!');
  }
  return (
    <header className="px-4 py-6 flex items-center justify-between">
      <Image src="/logo.svg" width={32} height={32} alt="@najmulhc logo" />
      <Navigation />
      <Button onlick={() =>alart()}>Download Resume</Button>
    </header>
  );
}
