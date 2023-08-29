import Providers from "./Providers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Najmul Huda Chowdhury | Professional web developer",
  description: "Hi, this is huda!",
  favicon: "/app/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#d5d5d5] dark:bg-[#191919] min-h-screen flex flex-col justify-between bg-[url('./Background.svg')] dark:bg-[url('./BackgroundDark.svg')] bg-center bg-fixed">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
