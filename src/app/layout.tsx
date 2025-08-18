"use client";

import type React from "react";
import type { Metadata } from "next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import { Geist } from "next/font/google";

const app_font = Geist({
  weight: ["400", "700"], // pesos que vas a usar
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Portfolio - Creative Developer",
//   description:
//     "A beautiful portfolio showcasing creative projects and thoughts",
//   generator: "v0.dev",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  Added dark className and Catppuccin background colors
    <html lang="en">
      <body className={app_font.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
