import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";
import Header from "@/components/layouts/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FoMoney PWA",
  description: "FoMoney PWA application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-homepage-bg h-screen bg-cover bg-center bg-no-repeat p-4 antialiased`}
      >
        <Header />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
