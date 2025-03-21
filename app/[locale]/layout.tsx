import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { locales, defaultLocale, type Locale } from "../../i18n";
import Providers from "./providers";
import Head from "next/head";
import ClientLayout from "@/components/ClientLayout"; // Importamos el nuevo componente
import { Toaster } from "react-hot-toast"; // Importamos el sistema de notificaciones

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
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          {/* 📌 Agregamos Toaster para manejar las notificaciones en toda la app */}
          <Toaster position="top-right" reverseOrder={false} />

          {/* Pasamos children a ClientLayout, donde se manejará el modal */}
          <ClientLayout>{children}</ClientLayout>
          
        </Providers>
        <script src="https://www.cryptohopper.com/widgets/js/script"></script>
      </body>
    </html>
  );
}
