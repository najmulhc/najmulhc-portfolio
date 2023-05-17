import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "Najmul Huda Chowdhury",
  description: "Professional frontend web developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <body className={`${rubik.className} bg-[#111a2b] `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
