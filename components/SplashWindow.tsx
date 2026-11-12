'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { LoadingBar } from './LoadingBar';

export default function SplashWindow({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Splash Screen Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 bg-primary min-h-screen w-screen flex items-center justify-center flex-col px-4 text-center">
          <p className="font-interblack font-black text-2xl sm:text-[40px] tracking-[3px] text-secondary mb-4">
            SAI EAIN KHANT
          </p>

          <LoadingBar onComplete={() => setIsLoaded(true)} />

          <Image
            src={'/assets/big-symbol.svg'}
            alt="big-symbol"
            width={362}
            height={681}
            className="absolute right-2 bottom-2 opacity-10 w-32 sm:w-50 md:w-90.5 md:h-170.25 pointer-events-none"
          />
        </div>
      )}

      {/* Children stay in the render tree at all times for Next.js validation */}
      <div className={!isLoaded ? 'invisible' : 'visible'}>{children}</div>
    </>
  );
}
