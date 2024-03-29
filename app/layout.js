import './_scss/globals.scss';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Global/Navbar/Navbar';
import Footer from '@/components/Global/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Bigg Bites Catering',
    default: 'Bigg Bites Catering',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
