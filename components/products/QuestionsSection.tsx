"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const CARD_SOURCES = [
  "Question1.png",
  "Question2.png",
  "Question3.png",
  "Question4.png",
  "Question5.png",
  "Question6.png",
  "Question7.png",
  "Question8.png",
  "Question9.png",
  "Question10.png",
  "Question11.png",
];

const CARD_LAYOUT = [
  { width: 280, height: 340, className: "left-[8%] top-[10%] opacity-40" },
  { width: 320, height: 360, className: "left-[38%] top-[5%] opacity-40" },
  { width: 320, height: 360, className: "right-[10%] top-[8%] opacity-40" },
  { width: 300, height: 360, className: "left-[5%] bottom-[12%] opacity-40" },
  { width: 480, height: 360, className: "left-[30%] bottom-[5%] opacity-100 z-10" },
  { width: 300, height: 360, className: "right-[2%] bottom-[5%] opacity-40" },
  { width: 260, height: 320, className: "left-[15%] top-[25%] opacity-40" },
  { width: 300, height: 360, className: "right-[20%] top-[20%] opacity-40" },
  { width: 280, height: 340, className: "left-[45%] top-[15%] opacity-40" },
  { width: 320, height: 360, className: "right-[5%] bottom-[25%] opacity-40" },
  { width: 260, height: 320, className: "left-[20%] bottom-[20%] opacity-40" },
] as const;

export default function QuestionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isStickyActive, setIsStickyActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = el.offsetHeight;
      // Sticky zone: section top has passed viewport top and section bottom still in view
      setIsStickyActive(rect.top <= 0 && rect.bottom > 0);
      // Progress 0 when section top hits viewport top; 1 when we've scrolled through the section
      const scrollRange = sectionHeight - viewportHeight;
      if (scrollRange <= 0) {
        setProgress(1);
        return;
      }
      const p = -rect.top / scrollRange;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Original positions + zoom (scale up) + tunnel (translateZ: far → near)
  const scale = 0.6 + progress * 1.0; // 0.6 → 1.6
  const tunnelZ = -400 + progress * 480; // -400px (far) → 80px (toward viewer)

  // At bottom of viewport (end of sticky scroll): show duplicate again in start pose, hide fixed animation
  const atStickyEnd = progress >= 0.98;
  const showFixedLayer = isStickyActive && !atStickyEnd;
  const showDuplicate = !isStickyActive || atStickyEnd;
  const duplicateScale = atStickyEnd ? 0.6 : scale;
  const duplicateTunnelZ = atStickyEnd ? -400 : tunnelZ;

  return (
    <div ref={sectionRef} className="min-h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <section className="relative h-full w-full bg-[#F9F9F9]">

          {/* In-section duplicate: visible at start and again at bottom of scroll (start pose); hidden during middle when fixed layer shows */}
          <div
            className={`absolute inset-0 transition-opacity duration-150 ${showDuplicate ? "" : "invisible pointer-events-none"}`}
            aria-hidden={!showDuplicate}
          >
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-4xl font-semibold text-[#0F6B6E] md:text-6xl">
                We&apos;ve already answered
              </h2>
              <h2 className="mt-4 text-4xl font-semibold text-[#0F6B6E] md:text-6xl">
                thousands of questions!
              </h2>
            </div>
            <div className="absolute inset-0 z-10" style={{ perspective: "1000px" }}>
              <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                {CARD_SOURCES.map((filename, i) => (
                  <div
                    key={`inflow-${filename}-${i}`}
                    className={`absolute ${CARD_LAYOUT[i].className}`}
                    style={{
                      transform: `scale(${duplicateScale}) translateZ(${duplicateTunnelZ}px)`,
                    }}
                  >
                    <Image
                      src={`/QuestionsMapsGPT/${filename}`}
                      width={CARD_LAYOUT[i].width}
                      height={CARD_LAYOUT[i].height}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky layer: fixed headline + images during scroll; hidden at bottom so duplicate shows again */}
          {showFixedLayer && (
            <>
              <div
                className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
                aria-hidden={!showFixedLayer}
              >
                <h2 className="text-4xl font-semibold text-[#0F6B6E] md:text-6xl">
                  We&apos;ve already answered
                </h2>
                <h2 className="mt-4 text-4xl font-semibold text-[#0F6B6E] md:text-6xl">
                  thousands of questions!
                </h2>
              </div>
              <div className="fixed inset-0 z-10 pointer-events-none" style={{ perspective: "1000px" }}>
                <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                  {CARD_SOURCES.map((filename, i) => (
                    <div
                      key={`fixed-${filename}-${i}`}
                      className={`absolute ${CARD_LAYOUT[i].className}`}
                      style={{
                        transform: `scale(${scale}) translateZ(${tunnelZ}px)`,
                      }}
                    >
                      <Image
                        src={`/QuestionsMapsGPT/${filename}`}
                        width={CARD_LAYOUT[i].width}
                        height={CARD_LAYOUT[i].height}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

        </section>
      </div>
    </div>
  );
}
