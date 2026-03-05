"use client";

import Image from "next/image";
import Link from "next/link";

export default function FinalCTASection() {
  const FRAME_WIDTH = 1728;
  const HERO_HEIGHT = 1092;

  return (
    <section className="bg-white flex flex-col items-center overflow-hidden">

      {/* Responsive Scaling Wrapper — hero only */}
      <div
        className="origin-top"
        style={{
          width: FRAME_WIDTH,
          height: HERO_HEIGHT,
          transform: "scale(min(1, 100vw / 1728))",
          transformOrigin: "top center",
        }}
      >
        <div className="relative w-[1728px] h-[1092px]">

          {/* ================= HERO IMAGE ================= */}
          <div
            className="absolute left-0 top-0"
            style={{ width: FRAME_WIDTH, height: HERO_HEIGHT }}
          >
            <Image
              src="/ConsumerPageCity.png"
              alt="City"
              fill
              className="object-cover"
              priority
            />

            {/* Rectangle 3299: left overlay gradient */}
            <div
              className="absolute left-0 top-0"
              style={{
                width: 1018,
                height: 1091,
                background: "linear-gradient(261.31deg, rgba(0, 0, 0, 0) 5.79%, rgba(0, 0, 0, 0.6) 56.37%)",
              }}
            />

            {/* LEFT CONTENT */}
            <div
              className="absolute text-white z-10"
              style={{
                left: 160,
                top: 280,
                width: 420,
              }}
            >
              <p className="text-2xl font-bold text-white mb-8">
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(to right, #8DF7FF 0%, #FFFFFF 84%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  MapsGPT
                </span>
                {" "}
                is browser based
              </p>

              <h2 className="text-[64px] font-semibold leading-[1.15] mb-8">
                We’re always
                <br />
                there for you.
              </h2>

              <p className="text-[20px] text-white mb-10 leading-[140%]">
                Access your local AI travel pal
                <br />
                on any browser.
              </p>

              <Link
                href="/maps-gpt"
                className="inline-block backdrop-blur-md no-underline text-white hover:opacity-90 transition-opacity cursor-pointer"
                style={{
                  padding: "18px 36px",
                  borderRadius: 50,
                  border: "1px solid rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.15)",
                  fontSize: 18,
                }}
              >
                Try it out! It’s completely free →
              </Link>
            </div>

            {/* PHONE */}
            <div
              className="absolute"
              style={{
                left: FRAME_WIDTH * 0.75 - 210,
                top: 180,
              }}
            >
              <Image
                src="/how/mob.png"
                alt="Phone"
                width={420}
                height={820}
                className="object-contain"
              />
            </div>

            {/* FLOATING HEARTS */}
            <Image
              src="/how/heart.png"
              alt=""
              width={90}
              height={90}
              className="absolute"
              style={{
                left: FRAME_WIDTH * 0.75 - 300,
                top: 200,
              }}
            />

            <Image
              src="/how/heart.png"
              alt=""
              width={80}
              height={80}
              className="absolute"
              style={{
                left: FRAME_WIDTH * 0.75 + 150,
                top: 300,
              }}
            />
          </div>

        </div>
      </div>

      {/* ================= CTA: centered in viewport ================= */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center py-16 px-4">
            <p className="text-[#4E4E4E] text-[20px] leading-[150%] mb-10 max-w-[600px] font-semibold">
              MapsGPT is updated regularly.
              <br />
              We’d love to hear your thoughts.
            </p>

            <div className="flex flex-wrap gap-8 justify-center">
              <Link
                href="/feedback"
                className="inline-flex items-center justify-center border border-[#CFCFCF] bg-white hover:bg-gray-50 transition no-underline text-[#2C2C2C] cursor-pointer relative z-10"
                style={{
                  padding: "14px 28px",
                  borderRadius: 8,
                  fontSize: 16,
                }}
              >
                Request a feature
              </Link>

              <Link
                href="/feedback"
                className="inline-flex items-center justify-center border border-[#CFCFCF] bg-white hover:bg-gray-50 transition no-underline text-[#2C2C2C] cursor-pointer relative z-10"
                style={{
                  padding: "14px 28px",
                  borderRadius: 8,
                  fontSize: 16,
                }}
              >
                Report a bug
              </Link>
            </div>
      </div>
    </section>
  );
}