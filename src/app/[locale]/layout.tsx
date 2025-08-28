import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { getMessages } from "next-intl/server";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hi, I'm Gerson – Software Engineer",
  description:
    "Solution and results-driven Developer, focused on creating effective technical solutions with clean code, solid architecture, and exceptional user experiences.",
  icons: {
    icon: "/favicon.ico", // caminho para o teu favicon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // opcional, para dispositivos Apple
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-main">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col">
              <Navbar />
              <main className="flex flex-1 items-center">{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
