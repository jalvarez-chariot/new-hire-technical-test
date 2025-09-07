import { Inter } from 'next/font/google';
import './globals.css';
import { CustomerProvider } from './context/CustomerContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chariot Energy Dashboard',
  description: 'Technical Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomerProvider>{children}</CustomerProvider>
      </body>
    </html>
  );
}