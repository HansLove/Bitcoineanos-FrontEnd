import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { locales, defaultLocale, type Locale } from "../../i18n";
import Providers from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Bitconeanos - Por un futuro descentralizado",
  description:
    "Más que usar Bitcoin, es creer en la libertad financiera, la descentralización y un futuro creado por y para las personas.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
 
  const locale = locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale;

  const messages = (await import(`@/locales/${locale}.json`)).default;

  return (
    <html lang={locale} className="dark">
       <Head>
        {/* Aquí solo indicamos el nombre del archivo sin public/ */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>{children}</Providers>
      </body>
    </html>
  );
}
