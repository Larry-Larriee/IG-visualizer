import { Inter } from "next/font/google";
import "./globals.css";
import Linky from "./components/helper/Linky";
import Image from "next/image";
import logo from "../../src/app/assets/logo.webp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " flex min-h-screen flex-col items-center gap-16"
        }
      >
        <nav className="mt-5 flex w-10/12 items-center justify-start gap-10">
          <Image
            width={500}
            height={500}
            alt={"logo"}
            src={logo}
            className="h-16 w-16 rounded-lg"
          />

          <Linky
            text={"IG Visualizer"}
            link={"/"}
            styling={
              "text-prim-2 font-league text-4xl font-bold hover:scale-105 transition duration-200 ease-in-out hover:cursor-pointer"
            }
          />
        </nav>
        {children}

        <footer className="mb-1 mt-10 flex w-10/12 justify-end gap-8">
          {/* text, link, styling */}
          <Linky
            text={"Get Started"}
            link={"/visualize"}
            styling={
              "hover:cursor-pointer font-league text-xl text-gray-600 hover:scale-105 transition duration-200 ease-in-out"
            }
          />

          <Linky
            text={"Privacy Policy"}
            link={"/privacy"}
            styling={
              "hover:cursor-pointer font-league text-xl text-gray-600 hover:scale-105 transition duration-200 ease-in-out"
            }
          />

          <Linky
            text={"Github"}
            link={"https://github.com/Larry-Larriee/IG-visualizer"}
            styling={
              "hover:cursor-pointer font-league text-xl text-gray-600 hover:scale-105 transition duration-200 ease-in-out"
            }
          />
        </footer>
      </body>
    </html>
  );
}
