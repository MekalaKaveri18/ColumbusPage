
// "use client";

// import Image from "next/image";

// export function RealEstateSection() {
//   return (
//     <section
//       style={{
//         background: "#F2F2F2",
//         paddingTop: "120px",
//         paddingBottom: "140px",
//       }}
//     >
//       {/* Top label */}
//       <div
//         style={{
//           textAlign: "center",
//           fontSize: "32px",
//           marginBottom: "70px",
//           color: "#6B6B6B",
//         }}
//       >
//         See the case studies ↓
//       </div>

//       <div
//         style={{
//           maxWidth: "1728px",
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "260px 1fr",
//           gap: "40px",
//           padding: "0 60px",
//         }}
//       >
//         {/* LEFT PANEL */}
//         <div>
//           <h2
//             style={{
//               fontSize: "38px",
//               lineHeight: "1.3",
//               margin: 0,
//               fontWeight: 600,
//             }}
//           >
//             Real Estate
//             <br />
//             Site Selection
//           </h2>

//           <p
//             style={{
//               marginTop: "20px",
//               fontSize: "16px",
//               color: "#6B7280",
//               lineHeight: "1.6",
//             }}
//           >
//             Enabling faster site-selection
//             <br />
//             for Residential and commercial
//             <br />
//             Real Estate customers, including:
//           </p>

//           <ul
//             style={{
//               marginTop: "20px",
//               padding: 0,
//               listStyle: "none",
//               color: "#6B7280",
//               fontSize: "16px",
//               lineHeight: "1.9",
//             }}
//           >
//             <li>Franchises</li>
//             <li>Consultants</li>
//             <li>CRE</li>
//             <li>Residential Developers</li>
//             <li>Wholesale brokers</li>
//           </ul>
//         </div>

//         {/* MAP AREA */}
//         <div>
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: "674px",
//               borderRadius: "14px",
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               src="/use-cases/real.png"
//               alt="map"
//               fill
//               style={{ objectFit: "cover" }}
//             />

//             {/* LEFT SEARCH CARD */}
//             <div
//               style={{
//                 position: "absolute",
//                 left: "40px",
//                 bottom: "60px",
//                 width: "480px",
//                 height: "280px",
//                 background: "rgba(255,255,255,0.55)",
//                 backdropFilter: "blur(18px)",
//                 borderRadius: "24px",
//                 padding: "28px",
//               }}
//             >
//               <p style={{ margin: 0, fontSize: "15px" }}>
//                 Give me the best places for a new investment
//               </p>

//               <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
//                 RECENTS
//               </div>

//               <ul
//                 style={{
//                   marginTop: "10px",
//                   padding: 0,
//                   listStyle: "none",
//                   lineHeight: "2",
//                 }}
//               >
//                 <li>Tadaima</li>
//                 <li>Arcana</li>
//                 <li>Cotogna</li>
//                 <li>Beit Rima</li>
//               </ul>
//             </div>

//             {/* RIGHT INSIGHTS CARD */}
//             <div
//               style={{
//                 position: "absolute",
//                 right: "40px",
//                 top: "50px",
//                 width: "355px",
//                 height: "298px",
//                 background: "rgba(255,255,255,0.55)",
//                 backdropFilter: "blur(18px)",
//                 borderRadius: "24px",
//                 padding: "24px",
//               }}
//             >
//               <div style={{ fontSize: "14px", marginBottom: "10px" }}>
//                 Insights
//               </div>

//               <div style={{ fontSize: "13px", color: "#666" }}>RECENTS</div>

//               <ul
//                 style={{
//                   marginTop: "10px",
//                   padding: 0,
//                   listStyle: "none",
//                   lineHeight: "2",
//                 }}
//               >
//                 <li>Tadaima</li>
//                 <li>Arcana</li>
//                 <li>Cotogna</li>
//                 <li>Beit Rima</li>
//               </ul>
//             </div>
//           </div>

//           {/* BOTTOM CAPTIONS */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginTop: "20px",
//               fontSize: "16px",
//               fontWeight: 600,
//             }}
//           >
//             <span>How we do it? What / Where do data we collect, verified</span>
//             <span>Insert text: Marketing towards this specific person</span>
//           </div>
//         </div>
//       </div>

//       {/* Responsive */}
//       <style jsx>{`
//         @media (max-width: 1100px) {
//           div[style*="grid-template-columns"] {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 768px) {
//           div[style*="height: 674px"] {
//             height: 420px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// 76px nav height + 20px gap = 96px from viewport top
const STICK_TOP_PX = 96;
const SECTION_F_ID = "residential-real-estate";

export function RealEstateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [stickStyle, setStickStyle] = useState<{ top: number; left: number; width: number } | null>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const cell = cellRef.current;
    const content = contentRef.current;
    const imageWrap = imageWrapRef.current;
    if (!cell || !content) return;

    const update = () => {
      // Use outer Section F container so "section bottom" is the real bottom of the block
      const sectionEl = document.getElementById(SECTION_F_ID);
      if (!sectionEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      const contentH = content.offsetHeight;
      const isLg = typeof window !== "undefined" && window.innerWidth >= 1024;
      const viewportH = typeof window !== "undefined" ? window.innerHeight : 0;
      const imageTop = imageWrap ? imageWrap.getBoundingClientRect().top : 0;

      // Column bottom when stuck at top
      const columnBottomWhenStuck = STICK_TOP_PX + contentH;

      // In stick zone: section top has passed the nav line and section is still in view
      const sectionTopPastStick = sectionRect.top <= STICK_TOP_PX;
      const sectionStillInView = sectionRect.bottom > 0;
      const isStuck = isLg && sectionTopPastStick && sectionStillInView;

      if (!isStuck) {
        setStickStyle(null);
        setSpacerHeight(0);
        return;
      }

      let top: number;
      if (sectionRect.bottom > columnBottomWhenStuck) {
        // Stick at top: column stays below nav until its bottom would hit section bottom
        top = STICK_TOP_PX;
      } else {
        // Pin at bottom: column bottom aligned with section bottom (stop sticky, hold there)
        top = sectionRect.bottom - contentH;
        top = Math.max(0, top);
        top = Math.min(top, viewportH - contentH);
      }
      // Don’t draw column above the right-column image
      top = Math.max(imageTop, top);

      setStickStyle({
        top,
        left: cellRect.left,
        width: cellRect.width,
      });
      setSpacerHeight(contentH);
    };

    update();
    const raf = () => {
      update();
      requestAnimationFrame(raf);
    };
    let rafId = requestAnimationFrame(raf);
    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F9F9F9] pt-5 pb-24 lg:pb-[140px]">

      <div className="max-w-[1728px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 px-6 md:px-12 lg:px-[60px] items-start">

        {/* LEFT PANEL — sticky below nav when scrolling */}
        <div ref={cellRef} className="lg:self-start pt-0">
          {stickStyle != null && spacerHeight > 0 && (
            <div style={{ height: spacerHeight }} aria-hidden />
          )}
          <div
            ref={contentRef}
            className={`${stickStyle ? "lg:fixed z-10" : ""} pt-0`}
            style={
              stickStyle
                ? { top: stickStyle.top, left: stickStyle.left, width: stickStyle.width }
                : undefined
            }
          >
            <h2 className="m-0 p-0 text-[30px] md:text-[34px] lg:text-[38px] leading-[1.3] font-semibold">
              Real Estate
              <br />
              Site Selection
            </h2>

            <p className="mt-5 text-[16px] text-[#6B7280] leading-[1.6] m-0">
              Enabling faster site-selection
              <br />
              for Residential and commercial
              <br />
              Real Estate customers, including:
            </p>

            <ul className="mt-5 text-[#6B7280] text-[16px] leading-[1.9] space-y-1 list-none p-0 m-0">
              <li>Franchises</li>
              <li>Consultants</li>
              <li>CRE</li>
              <li>Residential Developers</li>
              <li>Wholesale brokers</li>
            </ul>
          </div>
        </div>

        {/* MAP AREA */}
        <div>
          <div ref={imageWrapRef} className="relative w-full h-[420px] md:h-[520px] lg:h-[674px] rounded-[14px] overflow-hidden">

            <Image
              src="/use-cases/real.png"
              alt="map"
              fill
              className="object-cover"
            />

            {/* LEFT SEARCH CARD */}
            <div className="absolute left-4 md:left-8 lg:left-[40px] bottom-4 md:bottom-8 lg:bottom-[60px] w-[85%] sm:w-[420px] lg:w-[480px] bg-white/55 backdrop-blur-[18px] rounded-[24px] p-6">

              <p className="text-[15px]">
                Give me the best places for a new investment
              </p>

              <div className="mt-5 text-[14px] text-[#666]">
                RECENTS
              </div>

              <ul className="mt-2 leading-[2]">
                <li>Tadaima</li>
                <li>Arcana</li>
                <li>Cotogna</li>
                <li>Beit Rima</li>
              </ul>

            </div>

            {/* RIGHT INSIGHTS CARD */}
            <div className="absolute right-4 md:right-8 lg:right-[40px] top-4 md:top-8 lg:top-[50px] w-[240px] md:w-[300px] lg:w-[355px] bg-white/55 backdrop-blur-[18px] rounded-[24px] p-6">

              <div className="text-[14px] mb-2">
                Insights
              </div>

              <div className="text-[13px] text-[#666]">
                RECENTS
              </div>

              <ul className="mt-2 leading-[2]">
                <li>Tadaima</li>
                <li>Arcana</li>
                <li>Cotogna</li>
                <li>Beit Rima</li>
              </ul>

            </div>

          </div>

          {/* BOTTOM CAPTIONS */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-5 text-[16px] font-semibold">
            <span>How we do it? What / Where do data we collect, verified</span>
            <span>Insert text: Marketing towards this specific person</span>
          </div>

        </div>

      </div>

    </section>
  );
}