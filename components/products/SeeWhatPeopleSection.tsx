// "use client";

// import Image from "next/image";

// const FRAME_WIDTH = 1730;
// const COLUMN_COUNT = 6;
// const CARD_WIDTH = 250;   // adjust to match figma
// const GAP = 32;           // adjust to match figma

// const cards = [
//   "/see/1.png",
//   "/see/2.png",
//   "/see/3.png",
//   "/see/4.png",
//   "/see/5.png",
//   "/see/6.png",
//   "/see/7.png",
//   "/see/8.png",
//   "/see/9.png",
//   "/see/10.png",
//   "/see/11.png",
//   "/see/12.png",
//   "/see/13.png",
//   "/see/14.png",
//   "/see/15.png",
//   "/see/16.png",
// ];

// // distribution: 2,3,3,3,3,2
// const columns = [
//   cards.slice(0, 2),
//   cards.slice(2, 5),
//   cards.slice(5, 8),
//   cards.slice(8, 11),
//   cards.slice(11, 14),
//   cards.slice(14, 16),
// ];

// // stagger offsets — adjust to match figma perfectly
// const offsets = [40, 0, 60, 20, 80, 30];

// export default function SeeWhatPeopleSection() {
//   return (
//     <section className="bg-[#F6F7F8] py-24 flex justify-center">
//       <div
//         className="origin-top"
//         style={{
//           width: FRAME_WIDTH,
//           transform: "scale(min(1, 100vw / 1730))",
//           transformOrigin: "top center",
//         }}
//       >
//         <h2 className="text-center text-[42px] font-semibold text-[#0E2F44] mb-20">
//           See what people are asking
//         </h2>

//         <div className="flex gap-[32px] justify-center items-start">
//         {columns.map((column, colIndex) => (
//             <div
//             key={colIndex}
//             className="flex flex-col gap-8"
//             style={{
//                 width: CARD_WIDTH,
//             }}
//             >
//             {column.map((img, i) => (
//                 <Card key={i} img={img} />
//             ))}
//             </div>
//         ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ img }: { img: string }) {
//   return (
//     <div className="bg-white rounded-[24px] shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">

//       <div className="relative w-full aspect-[4/3]">
//         <Image
//           src={img}
//           alt=""
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="p-4 flex gap-3">
//         <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0" />
//         <div className="bg-gray-100 text-xs p-3 rounded-2xl leading-relaxed">
//           Newest chic spots for a coffee in Madrid, with comfy seats
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";


const QUESTION_IMAGES = Array.from(
  { length: 11 },
  (_, i) => `/QuestionsMapsGPT/Question${i + 1}.png`
);
const imageColumns: string[][] = [
  [QUESTION_IMAGES[0], QUESTION_IMAGES[1]],
  [QUESTION_IMAGES[2], QUESTION_IMAGES[3], QUESTION_IMAGES[4]],
  [QUESTION_IMAGES[5], QUESTION_IMAGES[6], QUESTION_IMAGES[7]],
  [QUESTION_IMAGES[8], QUESTION_IMAGES[9], QUESTION_IMAGES[10]],
  [QUESTION_IMAGES[0], QUESTION_IMAGES[1], QUESTION_IMAGES[2]],
  [QUESTION_IMAGES[3], QUESTION_IMAGES[4]],
];

export default function SeeWhatPeopleSection() {
  return (
    <section className="bg-[#F6F7F8] pt-20 px-4 pb-[380px] relative">
      <div className="max-w-[2000px] mx-auto">

        {/* Title */}
        <h2 className="text-center text-[clamp(28px,4vw,56px)] font-semibold text-[#0E2F44] mb-16">
          See what people are asking
        </h2>

        {/* 6 Column Layout — images only */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            gap-8
          "
        >
          {imageColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8">
              {column.map((src, i) => (
                <ImageCard key={`${colIndex}-${i}`} src={src} />
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom white-to-transparent vertical gradient */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: "min(240px, 25vh)",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}

function ImageCard({ src }: { src: string }) {
  return (
    <div className="rounded-[24px] shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden bg-white">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}