import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from "@/components/scroll/Lenis";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export const metadata: Metadata = {
  title: "Emmanuel Owolabi",
  description: "My personal portfolio website",
  openGraph: {
    title: "Emmanuel Owolabi",
    description: "My personal portfolio website",
    url: "https://www.devemmy.xyz/",
    siteName: "EmmyCodesIt",
    images: {
      url: "https://www.devemmy.xyz/images/og.png",
      width: 1920,
      height: 1080,
      alt: "EmmyCodesIt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster richColors />
      </body>
    </html>
  );
}
