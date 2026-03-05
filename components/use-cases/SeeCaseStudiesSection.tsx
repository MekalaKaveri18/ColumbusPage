"use client";

export function SeeCaseStudiesSection() {
  return (
    <section className="group/section bg-[#F9F9F9] py-10 md:py-12 lg:py-14 flex items-center justify-center cursor-default">
      <div className="flex items-center gap-4 md:gap-6">
        <div
          className="text-[40px] font-medium leading-[1.4]"
          style={{
            fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 500,
            background: "linear-gradient(90deg, #505050 0%, #939393 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          See the case studies
        </div>
        <span
          className="see-case-studies-arrow text-[32px] md:text-[40px] text-[#939393] shrink-0"
          aria-hidden
        >
          ↓
        </span>
      </div>
    </section>
  );
}
