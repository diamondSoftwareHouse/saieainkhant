import Image from 'next/image';

export default function HomePage() {
  return (
    <section
      className="
        flex 
        items-center 
        justify-center 
        lg:justify-end 
        min-h-screen
        lg:p-15
     "
    >
      {/* ===================== Decorations ================================= */}
      <Image
        src={'/assets/circle-half.svg'}
        alt="circle-half"
        width={262}
        height={523}
        className="absolute top-0 right-0 opacity-25 w-36 lg:w-65.5 pointer-events-none z-0"
      />
      <Image
        src={'/assets/zero-nine.svg'}
        alt="zero nine"
        width={735}
        height={367}
        className="absolute bottom-0 right-0 opacity-100 w-183.75 pointer-events-none z-0"
      />
      {/* ================================================================= */}

      {/* ===================== Main Contents ============================== */}
      <div className="flex flex-col lg:flex-row lg:gap-8 ">
        <div>
          <h1 className="text-3xl sm:text-6xl lg:text-[16px] xl:text-[36px] font-ibmsans font-bold leading-none">
            WELCOME
          </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-[36px] xl:text-[96px] font-blackops leading-none mt-2">
            VISITOR
          </h1>
        </div>

        <div className="relative z-10 ">
          <Image
            src={'/assets/big-symbol.svg'}
            alt="big-symbol"
            width={362}
            height={681}
            className="w-48 sm:w-64 lg:w-60 xl:w-90  h-auto object-contain pointer-events-none"
          />
        </div>
      </div>

      {/* ================================================================= */}
    </section>
  );
}
