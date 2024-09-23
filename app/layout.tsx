import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from "@/components/scroll/Lenis";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Emmanuel Owolabi",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          smoothWheel: false,
          duration: 0.5,
          lerp: 1,
        }}
      >
        <body className={poppins.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
