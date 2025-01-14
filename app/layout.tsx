import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideMenu } from "@/components/sideMenu";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Dashboard",
  description: "Working on data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        {children}
    
        </body>
    </html>
  );
}
