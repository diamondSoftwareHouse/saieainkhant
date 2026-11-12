'use client';

import { useEffect, useRef } from 'react';

export function LoadingBar({ onComplete }: { onComplete?: () => void }) {
  const progressBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progressBar.current?.classList.add('loading-progress');
  }, []);

  return (
    <div className="w-full max-w-[320px] sm:max-w-92 flex flex-col items-start">
      <div className="w-full h-6 sm:h-8 border-2 border-secondary bg-primary p-0.5 box-border">
        <div
          ref={progressBar}
          className="h-full loading-stripes"
          onAnimationEnd={() => onComplete?.()}
        />
      </div>

      <div className="flex justify-end w-full">
        <div className="mt-3 font-mono text-secondary tracking-[0.25em] text-xs sm:text-sm font-bold uppercase">
          Loading ...
        </div>
      </div>
    </div>
  );
}
