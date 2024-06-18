import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const nbsFont = localFont({
  src: '../../public/fonts/nbs.woff2',
  preload: true,
  weight: '400',
  variable: '--font-nbs',
});

export const metadata = {
  title: 'nobigscience',
  description: 'Matematikos mokymosi platforma',
  keywords:
    'matematika, kursai, mokymosi platforma, matematikos taisykles, matematikos uzduotys, matematikos uzdaviniai, pitagoro teorema, funkcijos, geometrija, trigonometrija, dalyba, tikimybes, kombinatorika, pamokos, matematikos pamokos, korepetitorius, matematikos korepetitorius, egzaminas, pasiruošimas egzaminui, pasiruošimas tarpiniam, tarpinis patikrinimas, matematikos egzaminas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nbsFont.variable} ${inter.variable} font-inter`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col items-center px-4 pt-6 pb-12 md:px-8 md:pt-8 lg:py-28 lg:px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
