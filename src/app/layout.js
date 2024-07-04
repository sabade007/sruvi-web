"use client";
import { Noto_Sans, Righteous } from "next/font/google";
import "./globals.css";
import Header from "./components/general/Header";
import { AuthContextProvider } from "./context/AuthContext";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});
const notosans = Noto_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-notosans",
});

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html
      lang="en"
      className={`${righteous.variable} ${notosans.variable} scroll-smooth overflow-x-hidden scrollbar-hide `}
    >
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
