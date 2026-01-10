import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roamstead | Modern Mountain Hospitality",
  description: "Providing more space to roam. Experience-driven stays in Utah's mountain communities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
