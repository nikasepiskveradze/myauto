import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/organisms/header/Header';
import { GlobalStateProvider } from '@/context/GlobaState';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ახალი და მეორადი ავტომობილები',
  description: 'See your car here',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F2F3F6]`}>
        <GlobalStateProvider>
          <Header />
          <main className="sm:container mx-auto">{children}</main>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
