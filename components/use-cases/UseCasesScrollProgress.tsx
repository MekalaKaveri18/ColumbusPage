"use client";

import { useEffect, useState } from "react";

const LEFT_OFFSET_PX = 24;
const LINE_WIDTH_PX = 8;
const TOP_OFFSET_PX = 80;

const SECTION_F_ID = "residential-real-estate";
const SECTION_N_ID = "geomarketing";

export function UseCasesScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [trackTop, setTrackTop] = useState(TOP_OFFSET_PX);
  const [trackHeight, setTrackHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const update = () => {
      const viewportH = window.innerHeight;
      const sectionF = document.getElementById(SECTION_F_ID);
      const sectionN = document.getElementById(SECTION_N_ID);

      if (!sectionF || !sectionN) return;

      const fRect = sectionF.getBoundingClientRect();
      const nRect = sectionN.getBoundingClientRect();

      // Line always spans from top of Section F to bottom of Section N (clamped to viewport)
      const startY = Math.max(0, Math.min(viewportH, fRect.top));
      const endY = Math.max(0, Math.min(viewportH, nRect.bottom));
      const height = Math.max(0, endY - startY);

      let p = 0;
      if (fRect.top >= TOP_OFFSET_PX) {
        p = 0;
      } else if (nRect.bottom <= viewportH) {
        p = 1;
      } else {
        const remaining = nRect.bottom - viewportH;
        const total = TOP_OFFSET_PX - fRect.top + remaining;
        p = total > 0 ? Math.max(0, Math.min(1, 1 - remaining / total)) : 1;
      }

      setTrackTop(startY);
      setTrackHeight(height);
      setProgress(p);
    };

    update();
    const raf = () => {
      update();
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted]);

  return (
    <div
      className="fixed inset-0 z-[30] pointer-events-none"
      style={{ left: 0, width: LEFT_OFFSET_PX + LINE_WIDTH_PX }}
      aria-hidden
    >
      <div
        className="absolute bg-red-500/50"
        style={{
          left: LEFT_OFFSET_PX,
          width: `${LINE_WIDTH_PX}px`,
          top: trackTop,
          height: `${trackHeight}px`,
        }}
      />
      <div
        className="absolute bg-red-600 transition-all duration-150 ease-out"
        style={{
          left: LEFT_OFFSET_PX,
          width: `${LINE_WIDTH_PX}px`,
          top: trackTop,
          height: `${trackHeight * progress}px`,
        }}
      />
    </div>
  );
}
