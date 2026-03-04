"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type ToggleTab = "enterprise" | "consumer";

const PHONE_HEIGHT = 778;

export default function Hero() {
  const [activeTab, setActiveTab] = useState<ToggleTab>("consumer");
  const [isLocked, setIsLocked] = useState(false);
  const phoneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = phoneContainerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const phoneCenter = rect.top + PHONE_HEIGHT / 2;
      const threshold = 60;
      if (phoneCenter <= viewportCenter + threshold && phoneCenter >= viewportCenter - threshold) {
        setIsLocked(true);
      } else if (phoneCenter > viewportCenter + threshold || rect.bottom < 0) {
        setIsLocked(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex justify-center"
      style={{
        background: "linear-gradient(180deg, #D2ECF7 73.22%, #F9F9F9 100%)",
      }}
    >

      {/* Responsive Scaling Wrapper */}
      <div
        className="origin-top"
        style={{
          width: 1728,
          height: 1756,
          transform: "scale(min(1, 100vw / 1728))",
          transformOrigin: "top center",
        }}
      >

        <div className="relative w-[1728px] h-[1756px]">

          {/* Toggle + Badge (badge always below toggle) */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[200px]">
            {/* Single rectangle toggle: 266×43, sliding pill centers on selected */}
            <div className="relative w-[266px] h-[43px] rounded-md bg-white shadow-lg">
              {/* Sliding rectangle: shifts to center on active option */}
              <div
                className="absolute top-1 left-1 w-[130px] h-[35px] rounded-md bg-black transition-[left] duration-200 ease-out"
                style={{
                  left: activeTab === "enterprise" ? 4 : 132,
                }}
              />
              <button
                type="button"
                onClick={() => setActiveTab("enterprise")}
                className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center rounded-l-md text-[16px] font-medium transition-colors z-10 cursor-pointer"
                style={{ color: activeTab === "enterprise" ? "white" : "black" }}
              >
                Enterprise
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("consumer")}
                className="absolute left-1/2 top-0 h-full w-1/2 flex items-center justify-center rounded-r-md text-[16px] font-medium transition-colors z-10 cursor-pointer"
                style={{ color: activeTab === "consumer" ? "white" : "black" }}
              >
                Consumer
              </button>
            </div>
            {/* Badge + Title: 30px spacing */}
            <div className="flex flex-col items-center gap-[30px]">
              <div className="w-[266px] h-[43px] flex items-center justify-center bg-white/60 rounded-full text-[14px]">
                Only Available on Earth
              </div>
              <div className="text-center">
<h1
              className="text-[48px] font-[656] leading-[140%] flex items-center justify-center"
              style={{
                fontFamily: '"SF Compact", -apple-system, BlinkMacSystemFont, sans-serif',
                background: "linear-gradient(90deg, #074146 0%, #000000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0px 0px 100px #FFFFFF",
              }}
            >
              MapsGPT
            </h1>
<h2
              className="text-[64px] font-[590] leading-[140%] flex items-center justify-center"
              style={{
                background: "linear-gradient(90deg, #59E1EB 14.99%, #313434 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0px 0px 100px #FFFFFF",
              }}
            >
              Travel Like a Boss
            </h2>
              </div>
            </div>
            {/* Phone: locks in place when centered in viewport */}
            <div ref={phoneContainerRef} className="mt-[100px]">
              {isLocked ? (
                <>
                  <div className="h-[778px] w-full" aria-hidden />
                  <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/product/phone.png"
                      width={404}
                      height={778}
                      alt="Phone"
                      priority
                    />
                  </div>
                </>
              ) : (
                <Image
                  src="/product/phone.png"
                  width={404}
                  height={778}
                  alt="Phone"
                  priority
                />
              )}
            </div>
          </div>

          {/* Floating Icons */}
          <Image src="/product/basketball.png" width={130} height={130}
            className="hero-float absolute left-[80px] top-[180px]" alt="" style={{ animationDelay: "0s" }} />
          <Image src="/product/martini.png" width={110} height={110}
            className="hero-float absolute left-[300px] top-[200px]" alt="" style={{ animationDelay: "0.4s" }} />
          <Image src="/product/emoji.png" width={115} height={115}
            className="hero-float absolute right-[300px] top-[180px]" alt="" style={{ animationDelay: "0.2s" }} />
          <Image src="/product/palne.png" width={140} height={140}
            className="hero-float absolute right-[60px] top-[160px]" alt="" style={{ animationDelay: "0.6s" }} />
          <Image src="/product/passport.png" width={100} height={100}
            className="hero-float absolute right-[200px] top-[350px]" alt="" style={{ animationDelay: "0.1s" }} />
          <Image src="/product/champ.png" width={115} height={115}
            className="hero-float absolute left-[350px] top-[520px]" alt="" style={{ animationDelay: "0.5s" }} />
          <Image src="/product/earth.png" width={130} height={130}
            className="hero-float absolute right-[250px] top-[550px]" alt="" style={{ animationDelay: "0.3s" }} />

          </div>
      </div>
    </section>
  );
}