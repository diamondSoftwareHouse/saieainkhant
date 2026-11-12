import React from 'react';
import Image from 'next/image';

const BorderPanel = () => {
  return (
    <div className="hidden lg:flex fixed inset-0 z-20 pointer-events-none">
      {/* Left */}
      <div className="flex flex-col justify-between h-full">
        <div className="w-12 h-12 bg-secondary mr-4 shrink-0" />
        <div>
          <Image
            src={'/assets/hazard-line-vertical.svg'}
            alt="triangle"
            width={33}
            height={33}
          />
        </div>
        <div>
          <Image
            src={'/assets/border1-vertical.svg'}
            alt="border1-vertical"
            width={58}
            height={302}
            className="mb-6"
          />
          <Image
            src={'/assets/hand-weg.svg'}
            alt="hand weg"
            width={43}
            height={82}
          />
        </div>
      </div>

      {/* Middle */}
      <div className="flex-1 flex flex-col justify-between px-4 h-full">
        {/* Top */}
        <div className="flex justify-between shrink-0">
          <div className="flex">
            <div className="mr-4 flex flex-col justify-end">
              <p className="tracking-[3px] text-[10px] font-interblack mb-2">
                SAI EAIN KHANT
              </p>
              <Image
                src={'/assets/hazard-line.svg'}
                alt="hazard-line"
                width={110}
                height={23}
              />
            </div>
            <Image
              src={'/assets/border1.svg'}
              alt="border1"
              width={367}
              height={54}
              className="mr-6"
            />
            <div className="flex items-start">
              <Image
                src={'/assets/logo.svg'}
                alt="logo"
                width={116}
                height={38}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mr-6">
            <Image
              src={'/assets/toxic.svg'}
              alt="logo"
              width={40}
              height={39}
            />
            <Image
              src={'/assets/qrcode.svg'}
              alt="logo"
              width={54}
              height={54}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between shrink-0">
          <div className="flex items-end">
            <Image
              src={'/assets/border3.svg'}
              alt="border3"
              width={390}
              height={43}
              className="ml-10 mr-25"
            />
            <Image
              src={'/assets/hazard-line.svg'}
              alt="hazard-line"
              width={110}
              height={23}
            />
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={'/assets/caution.svg'}
              alt="caution"
              width={54}
              height={54}
            />
            <Image
              src={'/assets/honey3.svg'}
              alt="honey3"
              width={42}
              height={36}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end justify-between h-full">
        <div className="flex flex-col items-end">
          <Image
            src={'/assets/border2.svg'}
            alt="border2"
            width={69}
            height={156}
          />
          <Image
            src={'/assets/honey1.svg'}
            alt="honey1"
            width={29}
            height={41}
            className="mt-6"
          />
          <Image
            src={'/assets/triangle.svg'}
            alt="triangle"
            width={33}
            height={33}
            className="mt-6"
          />
          <Image
            src={'/assets/hazard-line-vertical.svg'}
            alt="triangle"
            width={33}
            height={33}
            className="mt-6"
          />
        </div>
        <div>
          <Image
            src={'/assets/honey2.svg'}
            alt="honey2"
            width={30}
            height={64}
          />
        </div>
        <div>
          <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
            <Image
              src={'/assets/qrcode.svg'}
              alt="logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderPanel;
