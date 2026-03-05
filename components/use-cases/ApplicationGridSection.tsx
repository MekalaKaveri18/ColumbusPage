"use client";
export function ApplicationGridSection() {
  return (
    <section
      style={{
        background: "#F9F9F9",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: 500,
          margin: 0,
          color: "#505050",
        }}
      >
        The applications of this technology are versatile and wide
      </h2>

      <p
        style={{
          marginTop: "30px",
          fontSize: "24px",
          color: "#555",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <span
          className="bullet-halo-dark inline-block h-2 w-2 shrink-0 rounded-full bg-[#555]"
          aria-hidden
        />
        See the use-cases we've explored so far
      </p>
    </section>
  );
}
