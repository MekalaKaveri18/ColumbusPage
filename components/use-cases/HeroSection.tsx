"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[700px] md:h-[850px] lg:h-[991px] overflow-hidden">

      <Image
        src="/use-cases/hero.png"
        alt="City at night"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Content: title 30px down, subtitle 10px below title, CTA at bottom edge */}
      <div className="absolute inset-0 left-6 md:left-10 lg:left-[59px] right-6 md:right-10 lg:right-[59px] flex max-w-[1318px] flex-col text-white pt-20 md:pt-[184px] lg:pt-[230px] pb-6 lg:pb-8">
        <h1 className="max-w-[1099px] font-extrabold leading-[1.4] text-3xl md:text-5xl lg:text-[64px]">
          Stop using Language Models for
          <br />
          geographical problems.
        </h1>

        <p
          className="mt-[10px] flex max-w-[1318px] items-center text-xl md:text-2xl lg:text-[32px] leading-[1.4] tracking-[0.04em] text-[#FFFFFF]"
          style={{ fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 500 }}
        >
          ChatGPT, Gemini and Claude do not comprehend coordinates or are trained on earth data. Don’t use hallucination chat bots for your critical work.
        </p>

        <div className="flex-1 min-h-4" />
        <button className="self-start text-left text-lg md:text-2xl lg:text-[32px] font-bold pl-0 mb-5 lg:mb-5">
          [ Use our LGM instead. ]
        </button>
      </div>

    </section>
  );
}