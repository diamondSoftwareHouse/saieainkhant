// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import MobileNav from '@/components/Navbar/MobileNav';
import SplashWindow from '@/components/SplashWindow';
import {
  blackOpsOne,
  ibmPlexMono,
  ibmPlexSans,
  inter,
  interBlack,
} from '@/lib/fonts';
import BorderPanel from '@/components/BorderPanel';

export const metadata: Metadata = {
  title: 'SAI EAIN KHANT',
  description: 'The Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${blackOpsOne.variable} 
        ${ibmPlexMono.variable} 
        ${ibmPlexSans.variable} 
        ${inter.variable} 
        ${interBlack.variable}
      `}
      suppressHydrationWarning
    >
      <body className="bg-primary font-sans min-h-screen ">
        <SplashWindow>
          {/* MOBILE VIEW*/}
          <div className="lg:hidden flex flex-col min-h-screen">
            <MobileNav />
            <main>{children}</main>
          </div>

          {/* Bottom : Actual Contents */}
          <div className="hidden lg:block">{children}</div>

          {/* Middle : Border Panel */}
          <BorderPanel />

          {/*Top : Navbar */}

          <Navbar />
        </SplashWindow>
      </body>
    </html>
  );
}
