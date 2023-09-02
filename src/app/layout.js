import Providers from "./Providers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Najmul Huda Chowdhury | Professional web developer",
  description: "Hi, this is huda!",
  favicon: "/app/icon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#EEF2F6] dark:bg-[#121926] min-h-screen flex flex-col justify-between bg-[url('./Background.svg')] dark:bg-[url('./BackgroundDark.svg')] bg-center bg-fixed">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
