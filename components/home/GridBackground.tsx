"use client";

import React from "react";

export const GridBackground = () => {
    return (
        <div
            className="fixed inset-0 -z-10 h-full w-full bg-[#f7f7f6]"
            style={{
                backgroundImage: `
             linear-gradient(to right, rgba(252, 171, 171, 0.34) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(252, 171, 171, 0.34) 1px, transparent 1px)
           `,
                backgroundSize: "108px 108px",
            }}
        >
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
                viewBox="0 0 1920 1100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path d="M1320 -120 C1240 250 1240 850 1320 1220" fill="none" stroke="rgba(251, 175, 175, 0.58)" strokeWidth="1.4" />
                <path d="M1490 -120 C1410 250 1410 850 1490 1220" fill="none" stroke="rgba(251, 175, 175, 0.52)" strokeWidth="1.2" />
                <path d="M1660 -120 C1580 250 1580 850 1660 1220" fill="none" stroke="rgba(251, 175, 175, 0.42)" strokeWidth="1.1" />
                <path d="M1100 -120 C1180 250 1180 850 1100 1220" fill="none" stroke="rgba(251, 175, 175, 0.46)" strokeWidth="1.1" />
                <path d="M820 86 L820 430 M820 780 L820 1080" fill="none" stroke="rgba(251, 175, 175, 0.52)" strokeWidth="1.2" />
                <path d="M970 86 L970 430 M970 780 L970 1080" fill="none" stroke="rgba(251, 175, 175, 0.44)" strokeWidth="1.1" />
                <path d="M1280 86 L1280 430 M1280 780 L1280 1080" fill="none" stroke="rgba(251, 175, 175, 0.4)" strokeWidth="1.1" />
            </svg>
        </div>
    );
};
