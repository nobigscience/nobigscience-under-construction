import '@/app/styles/globals.css';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
});

export const metadata = {
  title: 'no big science',
  description: 'Matematikos mokymosi platforma',
  keywords:
    'matematika, kursai, mokymosi platforma, matematikos taisykles, matematikos uzduotys, matematikos uzdaviniai, pitagoro teorema, funkcijos, geometrija, trigonometrija, dalyba, tikimybes, kombinatorika, pamokos, matematikos pamokos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-lora`}>
        <main className="flex min-h-screen flex-col items-center justify-center px-8 py-6 md:py-28 md:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
