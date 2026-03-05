"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const SUBTITLE_PREFIX = "Find your next ";
const ROTATING_PHRASES = [
  "hang out.",
  "date spot.",
  "fave cafe.",
  "vacation.",
  "day trip.",
  "chill spot.",
  "thrift shop.",
  "event.",
];

const FEATURE_PILL_LABELS = [
  "Itineraries",
  "Find spots",
  "Ask AI about spots",
  "Favorite your spots",
  "Roll the dice",
  "Mobile and Web",
];

const MARQUEE_LOGOS = Array.from({ length: 12 }, (_, i) => `/MapsGPTLogos/Logo${i + 1}.png`);

export default function ShowcaseSection() {
  const FRAME_WIDTH = 1728;
  const FRAME_HEIGHT = 1343;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [suffix, setSuffix] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [expandedPillIndex, setExpandedPillIndex] = useState<number | null>(null);
  const [closingPillIndex, setClosingPillIndex] = useState<number | null>(null);

  const handleClosePill = (index: number) => {
    setClosingPillIndex(index);
    setExpandedPillIndex(null);
    window.setTimeout(() => setClosingPillIndex(null), 450);
  };

  useEffect(() => {
    const phrase = ROTATING_PHRASES[phraseIndex];
    const typeSpeed = 60;
    const deleteSpeed = 40;
    const pauseAtEnd = 800;
    const pauseAtEmpty = 150;

    if (!isDeleting) {
      if (suffix.length < phrase.length) {
        const t = setTimeout(() => setSuffix(phrase.slice(0, suffix.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return () => clearTimeout(t);
    }
    if (suffix.length > 0) {
      const t = setTimeout(() => setSuffix(suffix.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
    }, pauseAtEmpty);
    return () => clearTimeout(t);
  }, [phraseIndex, suffix, isDeleting]);

  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden flex justify-center">

      {/* Aspect Ratio Wrapper (True Responsive Height) */}
      <div
        className="relative w-full max-w-[1728px]"
        style={{
          aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}`,
        }}
      >
        {/* Scaled Content Layer */}
        <div
          className="absolute top-0 left-0 origin-top"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: "scale(min(1, 100vw / 1728))",
            transformOrigin: "top center",
          }}
        >
          <div className="relative w-[1728px] h-[1343px]">

            {/* Rectangle layer: frosted glass + Map UI inside */}
            <div
              className="absolute overflow-hidden rounded-[23px]"
              style={{
                left: 474,
                top: 348,
                width: 1175,
                height: 685,
                background: "rgba(0, 0, 0, 0.03)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div
                className="absolute overflow-hidden rounded-[23px]"
                style={{
                  left: 31,
                  top: 30,
                  width: 1118,
                  height: 626,
                  border: "5px solid rgba(225, 246, 255, 0.71)",
                  borderRadius: 23,
                }}
              >
                <Image
                  src="/emoji/desk.png"
                  alt="Maps UI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title + Subtitle */}
            <div
              className="absolute left-[140px] top-[160px] flex flex-col"
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 590,
                fontSize: "42px",
                lineHeight: "130%",
                letterSpacing: "-0.02em",
                color: "#083445",
              }}
            >
              <span>MapsGPT</span>
              <span className="whitespace-nowrap" style={{ minWidth: "900px" }}>
              {SUBTITLE_PREFIX}
              <span className="inline-block min-w-[1ch]">{suffix}</span>
              <span
                className="animate-pulse"
                style={{
                  opacity: !isDeleting && suffix === ROTATING_PHRASES[phraseIndex] ? 0 : 1,
                }}
              >
                |
              </span>
            </span>
            </div>

            {/* CTA */}
            <Link
              href="/maps-gpt"
              className="absolute left-[1296px] top-[194px] z-20 flex w-[317px] h-[56px] min-h-[44px] items-center justify-center gap-2 rounded-[26px] cursor-pointer border-0 no-underline touch-manipulation active:scale-[0.98] transition-transform select-none"
              style={{
                background: "#00B2FF",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 590,
                  fontSize: "20px",
                  lineHeight: "140%",
                  letterSpacing: "-0.02em",
                }}
              >
                Try it out now
              </span>
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                className="shrink-0"
                aria-hidden
              >
                <path
                  d="M1 5.5h11M11 5.5L7 1.5M11 5.5L7 9.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Left column: 6 feature pills; tapped pill expands/collapses in place and pushes others down */}
            <div
              className="absolute left-[140px] flex min-h-[685px] flex-col gap-[10px]"
              style={{ top: 378 }}
            >
              {FEATURE_PILL_LABELS.map((label, index) => {
                const isExpanded = expandedPillIndex === index;
                const isClosing = closingPillIndex === index;
                const showCard = isExpanded || isClosing;
                return (
                  <div
                    key={label}
                    className="overflow-hidden rounded-[28px]"
                    style={{
                      height: isExpanded ? 301 : 56,
                      width: showCard ? 313 : undefined,
                      minWidth: showCard ? 313 : 176,
                      transition: "height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {showCard ? (
                      <button
                        type="button"
                        onClick={() => isExpanded && handleClosePill(index)}
                        className="flex h-full w-[313px] cursor-pointer flex-col rounded-[28px] border-0 p-6 text-left touch-manipulation"
                        style={{ background: "#E1F6FF" }}
                        aria-label={isExpanded ? `Close ${label}` : undefined}
                      >
                        <span
                          className="text-[19px] font-normal leading-[140%] tracking-[-0.02em]"
                          style={{
                            fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                            color: "#06403A",
                          }}
                        >
                          {label}
                        </span>
                        <p className="mt-3 text-[14px] leading-[1.6] text-[#06403A]/80">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setExpandedPillIndex(index)}
                        className="flex h-[56px] min-w-[176px] w-max cursor-pointer items-center gap-3 rounded-[28px] border-0 px-4 text-left touch-manipulation"
                        style={{ background: "#E1F6FF" }}
                      >
                        <span
                          className="relative flex h-[11px] w-[11px] shrink-0 items-center justify-center"
                          aria-hidden
                        >
                          <span
                            className="absolute left-1/2 top-0 h-[11px] w-[2px] -translate-x-px rounded-[1px]"
                            style={{ background: "#06403A" }}
                          />
                          <span
                            className="absolute left-0 top-1/2 h-[2px] w-[11px] -translate-y-px rounded-[1px]"
                            style={{ background: "#06403A" }}
                          />
                        </span>
                        <span
                          className="whitespace-nowrap text-[19px] font-normal leading-[140%] tracking-[-0.02em]"
                          style={{
                            fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                            color: "#06403A",
                          }}
                        >
                          {label}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Trusted: 70px below bottom edge of rectangle layer (rectangle top 348 + height 685 + 70 = 1103) */}
            <div
              className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-center"
              style={{ top: 1143 }}
            >
              <p
                className="mb-0 flex h-[40px] w-[303px] items-center justify-center text-center"
                style={{
                  fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  color: "#9F9F9F",
                }}
              >
                We work with data from the most reputable brands
              </p>

              {/* Infinite scroll marquee: viewport fits 5 full logos + 2 partially visible (5.5 × (120+48) ≈ 924) */}
              <div
                className="relative mt-0 overflow-hidden"
                style={{ width: "924px", maxWidth: "100vw" }}
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 shrink-0"
                  style={{
                    background: "linear-gradient(to right, #FFFFFF, transparent)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 shrink-0"
                  style={{
                    background: "linear-gradient(to left, #FFFFFF, transparent)",
                  }}
                />
                <div className="trusted-marquee flex w-max items-center gap-12">
                  {MARQUEE_LOGOS.map((src) => (
                    <Image key={src} src={src} width={120} height={40} alt="" className="shrink-0" />
                  ))}
                  {MARQUEE_LOGOS.map((src) => (
                    <Image key={`dup-${src}`} src={src} width={120} height={40} alt="" className="shrink-0" aria-hidden />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}