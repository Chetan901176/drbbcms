import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Marquee from "@/components/layout/Marquee";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SWARAJYA MILITARY SCHOOL AND ACADEMY",
  description: "Swarajya Military School And Academy - Come to Learn and Go to Serve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <Marquee/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
