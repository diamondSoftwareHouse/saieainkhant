import Image from 'next/image';
import { sendContactEmail } from '@/app/actions/contact';

export default function ContactPage() {
  return (
    <section
      className="
        flex 
        flex-col 
        min-h-screen
        items-center 
        justify-start
        mt-15
        overflow-auto

        lg:flex-row  
        lg:items-start  
        lg:justify-end
        xl:justify-center
        lg:p-15
        lg:mt-0
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
        3
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
            CONTACT
          </h1>
        </div>

        {/* About Content */}
        <div className="px-2">
          <div className="font-mono font-bold tracking-[4px] text-[60px] lg:text-[80px]">
            <h1>INITIATE</h1>
            <h1>CONTACT.</h1>
          </div>
          <div className="font-sans font-bold tracking-[4px] mb-4">
            <p className="mb-2">saieainkhant9@gmail.com</p>
            <p>+959 423 685 350</p>
          </div>

          <form action={sendContactEmail}>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="name"
                className="font-inter font-bold tracking-[4px] text-[11px] mb-1"
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                maxLength={100}
                className=" border border-secondary z-40 outline-none p-2"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="font-inter font-bold tracking-[4px] text-[11px] mb-1"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                maxLength={254}
                className=" border border-secondary z-40 outline-none p-2"
                placeholder="johndoe123@gmail.com"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="phone"
                className="font-inter font-bold tracking-[4px] text-[11px] mb-1"
              >
                PHONE
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className=" border border-secondary z-40 outline-none p-2"
                placeholder="09123456789"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="message"
                className="font-inter font-bold tracking-[4px] text-[11px] mb-1"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={5000}
                className=" border border-secondary z-40 outline-none p-2"
                placeholder="Hello! I'd like to work with you..."
              />
            </div>

            <button
              type="submit"
              className=" bg-secondary w-full z-40 flex items-center justify-center py-3 cursor-pointer hover:opacity-80 active:opacity-90"
            >
              <Image
                src={'/assets/mail.svg'}
                alt="Send"
                width={25}
                height={17}
              />
            </button>
          </form>
        </div>
      </div>
      {/* ================================================================= */}
    </section>
  );
}
