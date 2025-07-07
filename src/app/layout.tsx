import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import SplashCursor from "@/components/splash-cursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hi, I'm Gerson – Fullstack Developer",
  description: "HI create fast, clean and modern websites and apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-main">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="z-50">
            <SplashCursor />
          </div>
          <div className="flex flex-col">
            <Navbar />
            <main className="flex flex-1 items-center">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
