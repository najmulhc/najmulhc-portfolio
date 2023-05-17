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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#111a2b] min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
