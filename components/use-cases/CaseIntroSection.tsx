"use client";

import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Residential Real Estate", image: "/use-cases/res.png", href: "/use-cases#residential-real-estate" },
  { title: "Commercial Real Estate", image: "/use-cases/com.png", href: "/use-cases#commercial-real-estate" },
  { title: "Generative Geodata", image: "/use-cases/gen.png", href: "/use-cases#generative-geodata" },
  { title: "Logistics Optimization", image: "/use-cases/log.png", href: "/use-cases#logistics-optimization" },
  { title: "Urban Planning", image: "/use-cases/ub.png", href: "/use-cases#urban-planning" },
  { title: "Site Selection", image: "/use-cases/site.png", href: "/use-cases#site-selection" },
  { title: "Consumer Mapping", image: "/use-cases/urb.png", href: "/use-cases#consumer-mapping" },
  { title: "Ground Due Diligence", image: "/use-cases/due.png", href: "/use-cases#ground-due-diligence" },
  { title: "Geomarketing", image: "/use-cases/geo.png", href: "/use-cases#geomarketing" },
];

export function CaseIntroSection() {
  return (
    <section className="case-intro-grid w-full max-w-[1728px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="case-intro-card group relative block h-[260px] sm:h-[320px] md:h-[360px] lg:h-[413px] overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

          {/* Bottom gradient: 0% black → 50% black (vertical) */}
          <div
            className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",
            }}
          />

          {/* Overlay on this card when another card is hovered */}
          <div
            className="case-intro-rest-overlay absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-200"
            aria-hidden
          />

          {/* Title — centered */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white text-lg md:text-xl lg:text-2xl font-medium px-4">
            {item.title}
          </div>

          {/* Arrow — bounces on card hover via CSS */}
          <div className="case-intro-arrow absolute bottom-6 right-6 text-white text-xl md:text-2xl lg:text-3xl">
            ↓
          </div>
        </Link>
      ))}
    </section>
  );
}
