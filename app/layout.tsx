import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import Providers from './providers';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space Launch Tracker',
  description: 'Track SpaceX launches',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
      <Providers >
        {children}
      </Providers>
    </body>
  </html>
)

export default RootLayout;
