'use client';

import './styles/globals.scss';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

/* export const metadata = {
  title: 'Holocruxe',
  description: 'The AI for your legacy',
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
