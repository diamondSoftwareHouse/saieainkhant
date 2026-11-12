import Image from 'next/image';

export default function AboutPage() {
  return (
    <section
      className="
        flex 
        flex-col 
        min-h-screen
        items-center 
        justify-center
        overflow-auto

        lg:flex-row  
        lg:items-start  
        lg:justify-end
        xl:justify-center  
        lg:p-15
      "
    >
      {/* ===================== Decorations ================================= */}
      <Image
        src={'/assets/big-symbol.svg'}
        alt="big-symbol"
        width={362}
        height={681}
        className="fixed bottom-0 right-0 opacity-5 -z-10"
      />
      <span className="font-blackops text-[350px] fixed opacity-5 -bottom-30 left-45 -z-10 hidden lg:flex ">
        9
      </span>
      {/* ================================================================= */}

      {/* ===================== Main Contents ============================== */}
      <div className="flex flex-row items-start">
        {/* Vertical About Me Title */}
        <div className="relative hidden lg:block w-30 h-150 shrink-0 overflow-hidden opacity-5">
          <h1
            className="
            absolute
            left-1/2
            top-53
            w-90
            -translate-x-1/2
            -translate-y-1/2
            rotate-90
            font-blackops
            text-[90px]
            tracking-[4px]
            whitespace-nowrap
          "
          >
            ABOUT ME
          </h1>
        </div>

        {/* About Content */}
        <div className="px-2 lg:px-0">
          <div className="text-[40px] lg:text-[80px] font-black font-ibm-sans-bold ">
            <h1>SAI EAIN</h1>
            <h1>KHANT</h1>
          </div>
          <div className="font-mono">
            <p>BUILDING HIGH-PERFORMANCE SYSTEMS /</p>
            <p>FULL-STACK ENGINEERING / PRECISION CODE</p>
          </div>
          <div className="font-sans mt-6">
            Full Stack Software Developer passionate about creating clean,
            <br className="hidden lg:block" />
            responsive, and meaningful applications.
          </div>
          <div className="font-sans mt-6">
            Skilled in turning ideas into practical digital solutions, solving
            <br className="hidden lg:block" />
            problems, and continuously exploring new technologies to build{' '}
            <br className="hidden lg:block" />
            better user experiences.
          </div>
        </div>
      </div>
      {/* ================================================================= */}
    </section>
  );
}
