import Navbar from '@/components/shared/navbar';
import './globals.css';
import Footer from '@/components/shared/footer';
import { Syne, Inter } from 'next/font/google';

export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syne',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
