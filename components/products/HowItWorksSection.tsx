// "use client";

// import Image from "next/image";

// export default function HowItWorksSection() {
//   return (
//     <section className="bg-[#F4F4F4] py-24 lg:py-32">
//       <div className="max-w-[1400px] mx-auto px-6">

//         {/* ================= TITLE ================= */}
//         <h2 className="text-center text-[40px] md:text-[56px] lg:text-[64px] leading-[140%] font-semibold text-black mb-16 lg:mb-24">
//           How It Works
//         </h2>

//         {/* ================= CONTENT ================= */}
//         <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">

//           {/* LEFT TEXT */}
//           <div className="flex justify-center lg:justify-start">
//             <p className="text-[32px] md:text-[48px] lg:text-[64px] leading-[140%] font-semibold text-[#0C4F4E] max-w-[450px] text-center lg:text-left">
//               Chat to find
//               <br />
//               what you need.
//             </p>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col items-center">

//             {/* ================= CLUSTER ================= */}
//             <div className="relative w-full max-w-[593px] aspect-square mb-[34px]">

//               {/* ===== CENTER IMAGE ===== */}
//               <Image
//                 src="/how/center.png"
//                 alt=""
//                 width={141}
//                 height={141}
//                 className="absolute left-[226px] top-[226px]"
//               />

//               {/* ================= IMAGES ================= */}

//               <Image
//                 src="/how/1.png"
//                 alt=""
//                 width={134}
//                 height={158}
//                 className="absolute left-[0px] top-[80px] rounded-[17px]"
//               />

//               <Image
//                 src="/how/3.png"
//                 alt=""
//                 width={107}
//                 height={129}
//                 className="absolute left-[220px] top-[40px] rounded-[14px]"
//               />

//               <Image
//                 src="/how/4.png"
//                 alt=""
//                 width={98}
//                 height={97}
//                 className="absolute right-[40px] top-[90px] rounded-[14px]"
//               />

//               <Image
//                 src="/how/5.png"
//                 alt=""
//                 width={113}
//                 height={135}
//                 className="absolute right-[30px] bottom-[140px] rounded-[17px]"
//               />

//               <Image
//                 src="/how/6.png"
//                 alt=""
//                 width={107}
//                 height={106}
//                 className="absolute left-[230px] bottom-[90px] rounded-[14px]"
//               />

//               <Image
//                 src="/how/7.png"
//                 alt=""
//                 width={134}
//                 height={158}
//                 className="absolute left-[60px] bottom-[0px] rounded-[17px]"
//               />

//               {/* ================= PILLS ================= */}

//               <Pill className="left-[10px] top-[20px]" />
//               <Pill className="left-[240px] top-[0px]" />
//               <Pill className="right-[0px] top-[120px]" />
//               <Pill className="right-[0px] bottom-[200px]" />
//               <Pill className="left-[210px] bottom-[40px]" />
//               <Pill className="left-[20px] bottom-[180px]" />

//             </div>
//             {/* ================= INPUT BOX ================= */}
// <div className="flex flex-col items-center">

//   {/* OUTER CONTAINER (593 x 134) */}
//   <div
//     className="relative w-[593px] h-[134px] rounded-[24px] bg-white"
//     style={{
//       boxShadow: "inset 0 0 0 2px #2F6F73"
//     }}
//   >

//     {/* TITLE */}
//     <div className="absolute top-[22px] left-0 w-full text-center text-[#3F9C95] text-[22px] font-medium">
//       Roll the dice
//     </div>

//     {/* INPUT FIELD (589 x 69 EXACT) */}
//     <div
//       className="absolute left-[2px] top-[63px] w-[589px] h-[69px] rounded-[24px] bg-white"
//       style={{
//         boxShadow: "inset 0 0 0 1px #C7DCDC"
//       }}
//     >
//       {/* TEXT */}
//       <div className="absolute left-[24px] top-[18px] text-[24px] text-[#6F8584]">
//         Ask MapsGPT anything
//       </div>

//       {/* ARROW BUTTON */}
//       <div className="absolute right-[16px] top-[8.5px] w-[52px] h-[52px] bg-[#8FC9C3] rounded-[16px] flex items-center justify-center">
//         <span className="text-white text-[26px] leading-none">→</span>
//       </div>
//     </div>

//   </div>

//   {/* FOOTER */}
//   <div className="mt-[24px] text-[18px] text-[#1E2432]">
//     Powered by Columbus-01
//     <span className="ml-[8px]">▶</span>
//   </div>

// </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// /* ===================== PILL COMPONENT ===================== */

// function Pill({ className }: { className?: string }) {
//   return (
//     <div
//       className={`absolute w-[160px] h-[45px] bg-white border border-[#BCBCBC] rounded-[22.5px] flex items-center gap-3 px-4 text-[16px] font-medium text-black ${className}`}
//     >
//       <span className="text-[18px] leading-none">👩‍🦰</span>
//       <span>Gen Z Spots</span>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#F9F9F9] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">

        {/* ================= TITLE ================= */}
        <h2 className="text-center text-[32px] md:text-[48px] lg:text-[64px] leading-[140%] font-semibold text-black mb-12 lg:mb-24">
          How It Works
        </h2>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT TEXT */}
          <div className="flex justify-center lg:justify-start items-center">
            <p
              className="text-center lg:text-left"
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                fontStyle: "normal",
                fontWeight: 590,
                fontSize: "64px",
                lineHeight: "140%",
                display: "block",
                maxWidth: "449px",
                width: "100%",
                background: "linear-gradient(90deg, #00454A 0%, #00A4B0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Chat to find what you need.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center">

            {/* ================= CLUSTER (669×426 from design, responsive with %) ================= */}
            <div className="relative w-full max-w-[669px] mb-[34px] overflow-visible aspect-[669/426]">
              <div className="absolute inset-0">
                {/* Center ellipse: 141×141, border 4px #000 — pos (254,169) */}
                <Image
                  src="/how/center.png"
                  alt=""
                  width={141}
                  height={141}
                  className="absolute rounded-full object-cover w-[21.08%] h-auto"
                  style={{
                    left: "37.97%",
                    top: "39.67%",
                    border: "4px solid #000000",
                    boxSizing: "border-box",
                    aspectRatio: "1",
                  }}
                />

                <Image
                  src="/how/3.png"
                  alt=""
                  width={107}
                  height={129}
                  className="absolute rounded-[14px] w-[16%] h-auto"
                  style={{ left: "34.98%", top: "5.4%", aspectRatio: "107/129" }}
                />

                <Image
                  src="/how/5.png"
                  alt=""
                  width={113}
                  height={135}
                  className="absolute rounded-[17px] w-[16.89%] h-auto"
                  style={{ left: "68.46%", top: "41.08%", aspectRatio: "113/135" }}
                />

                <Image
                  src="/how/4.png"
                  alt=""
                  width={98}
                  height={97}
                  className="absolute rounded-[14px] w-[14.65%] h-auto"
                  style={{ left: "60.09%", top: "15.73%", aspectRatio: "98/97" }}
                />

                <Image
                  src="/how/6.png"
                  alt=""
                  width={107}
                  height={106}
                  className="absolute rounded-[14px] w-[16%] h-auto"
                  style={{ left: "56.05%", top: "73.94%", aspectRatio: "107/106" }}
                />

                <Image
                  src="/how/1.png"
                  alt=""
                  width={134}
                  height={158}
                  className="absolute rounded-[17px] w-[20.03%] h-auto"
                  style={{ left: "8.07%", top: "16.9%", aspectRatio: "134/158" }}
                />

                <Image
                  src="/how/7.png"
                  alt=""
                  width={134}
                  height={158}
                  className="absolute rounded-[17px] w-[20.03%] h-auto"
                  style={{ left: "11.21%", top: "60.8%", aspectRatio: "134/158" }}
                />

                {/* Pills: positions as % of 669×426 (pills can sit slightly outside) */}
                <Pill style={{ left: "12.71%", top: "46.48%" }} />
                <Pill style={{ left: "7.32%", top: "0%" }} />
                <Pill style={{ left: "34.98%", top: "89.44%" }} />
                <Pill style={{ left: "67.41%", top: "16.9%" }} />
                <Pill style={{ left: "40.66%", top: "2.58%" }} />
                <Pill style={{ left: "76.08%", top: "60.8%" }} />
                <Pill style={{ left: "64.87%", top: "80.99%" }} />
                <Pill style={{ left: "0%", top: "75.82%" }} />
              </div>
            </div>

            {/* ================= INPUT BOX (Group 1371: 593×166) ================= */}
            <div className="flex flex-col items-center w-full max-w-[593px]">
              {/* Rectangle 3183: card 593×134 */}
              <div
                className="relative w-full rounded-[15px] bg-white overflow-hidden"
                style={{
                  height: 134,
                  border: "2px solid rgba(0, 69, 74, 0.5)",
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Roll the dice — Inter 600 16px #5AB7AE, ~22px from top, centered */}
                <div
                  className="absolute left-0 w-full flex justify-center items-center"
                  style={{
                    top: 22,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#5AB7AE",
                  }}
                >
                  Roll the dice
                </div>

                {/* Rectangle 3184: input area 589×69, from top 63px, bottom radius only */}
                <div
                  className="absolute left-[2px] right-[2px] bg-white"
                  style={{
                    top: 63,
                    height: 69,
                    borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "0 0 13px 13px",
                  }}
                >
                  {/* Ask MapsGPT anything — Inter 500 20px #839694 */}
                  <div
                    className="absolute left-[31px] flex items-center"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "140%",
                      color: "#839694",
                    }}
                  >
                    Ask MapsGPT anything
                  </div>

                  {/* Group 1123: arrow button 37×36px */}
                  <div
                    className="absolute right-[14px] top-[50%] flex items-center justify-center -translate-y-1/2 rounded-[11px]"
                    style={{
                      width: 37,
                      height: 36,
                      background: "rgba(139, 235, 225, 0.8)",
                    }}
                    aria-hidden
                  >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-white/90 shrink-0">
                      <path d="M2 8h10M12 5l5 3-5 3V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Powered by Columbus-01 + play icon — SF Pro 274 15px, gradient text */}
              <div className="flex items-center justify-center gap-2 mt-[24px]">
                <span
                  className="text-[15px] leading-[140%]"
                  style={{
                    fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 274,
                    background: "linear-gradient(90deg, #0A1342 0%, #2A2A2A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Powered by Columbus-01
                </span>
                <span className="w-6 h-6 flex items-center justify-center" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0A1342]">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* ===================== PILL COMPONENT ===================== */

function Pill({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute flex items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4 bg-white rounded-[22.5px] ${className ?? ""}`}
      style={{
        width: "23.92%",
        height: "10.56%",
        minWidth: 80,
        minHeight: 28,
        maxWidth: 160,
        maxHeight: 45,
        border: "0.8px solid #BCBCBC",
        boxSizing: "border-box",
        fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
        fontStyle: "normal",
        fontWeight: 510,
        fontSize: "clamp(10px, 2.4vw, 16px)",
        lineHeight: "140%",
        color: "#000000",
        ...style,
      }}
    >
      <span className="leading-none shrink-0" aria-hidden>💁‍♀️</span>
      <span className="truncate">Gen Z Spots</span>
    </div>
  );
}