import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="fixed top-20 z-30 left-20 hidden lg:flex flex-col justify-between ">
      <div>
        <div className="mb-4">
          <p className="text-[10px] font-interblack tracking-[3px] mb-2">
            SAI EAIN KHANT
          </p>
          <p className="text-[11px] font-monospace font-bold tracking-[4px] mb-2">
            SOFTWARE DEVELOPER
          </p>
          <p className="text-[8px] font-monospace font-bold tracking-[4px] mb-2">
            UNIT_01 // PORT — 2003
          </p>
          <p className="text-[8px] font-monospace font-bold tracking-[2px] mb-2 opacity-50">
            REACT // NODE.JS // TYPESCRIPT // PYTHON //
          </p>
          <p className="text-[8px] font-monospace font-bold tracking-[2px] mb-2 opacity-50">
            SQL // C# // PHP
          </p>
          <div className="text-[8px] font-monospace font-bold tracking-[2px] max-w-30 py-1 pl-2  bg-secondary text-primary">
            ● SYSTEM ONLINE
          </div>
        </div>
        <NavLinks />
      </div>

      <div className="grid grid-cols-2 gap-10 mb-10 ml-10">
        <Image
          src="/assets/prototype.svg"
          width={127}
          height={67}
          alt="prototype"
        />
        <Image
          src="/assets/threetriangle.svg"
          width={65}
          height={61}
          alt="threetriangle"
        />
        <Image src="/assets/toxic.svg" width={58} height={56} alt="toxic" />
        <Image
          src="/assets/skeletonhead.svg"
          width={56}
          height={53}
          alt="skeletonhead"
        />
      </div>
    </nav>
  );
};

export default Navbar;
