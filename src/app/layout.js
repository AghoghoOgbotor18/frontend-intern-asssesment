import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Intern Assessment",
  description: "Next.js + Tailwind CSS implementation of the assessment Figma design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}