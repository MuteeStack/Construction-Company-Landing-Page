const companies = [
  {
    name: "BECHTEL",
    bg: "#003087",
    w: 180,
    fs: 22,
    logo: (
      <g>
        <circle cx="15" cy="20" r="8" fill="white" opacity="0.9"/>
        <text x="15" y="24" textAnchor="middle" fill="#003087" fontSize="10" fontWeight="bold">B</text>
      </g>
    )
  },
  {
    name: "FLUOR",
    bg: "#E4002B",
    w: 160,
    fs: 22,
    logo: (
      <g>
        <rect x="8" y="12" width="14" height="14" rx="2" fill="white" opacity="0.9"/>
        <text x="15" y="23" textAnchor="middle" fill="#E4002B" fontSize="10" fontWeight="bold">F</text>
      </g>
    )
  },
  {
    name: "AECOM",
    bg: "#00205B",
    w: 160,
    fs: 22,
    logo: (
      <g>
        <polygon points="15,8 22,20 15,32 8,20" fill="white" opacity="0.9"/>
        <text x="15" y="24" textAnchor="middle" fill="#00205B" fontSize="8" fontWeight="bold">AE</text>
      </g>
    )
  },
  {
    name: "TURNER",
    bg: "#E87722",
    w: 170,
    fs: 21,
    logo: (
      <g>
        <circle cx="15" cy="20" r="8" fill="white" opacity="0.9"/>
        <text x="15" y="24" textAnchor="middle" fill="#E87722" fontSize="10" fontWeight="bold">T</text>
      </g>
    )
  },
  {
    name: "SKANSKA",
    bg: "#005587",
    w: 180,
    fs: 21,
    logo: (
      <g>
        <rect x="8" y="12" width="14" height="14" rx="7" fill="white" opacity="0.9"/>
        <text x="15" y="22" textAnchor="middle" fill="#005587" fontSize="9" fontWeight="bold">S</text>
      </g>
    )
  },
  {
    name: "KIEWIT",
    bg: "#1B3A6B",
    w: 160,
    fs: 22,
    logo: (
      <g>
        <rect x="8" y="12" width="14" height="14" rx="2" fill="white" opacity="0.9"/>
        <text x="15" y="23" textAnchor="middle" fill="#1B3A6B" fontSize="10" fontWeight="bold">K</text>
      </g>
    )
  },
  {
    name: "JACOBS",
    bg: "#5C068C",
    w: 160,
    fs: 22,
    logo: (
      <g>
        <circle cx="15" cy="20" r="8" fill="white" opacity="0.9"/>
        <text x="15" y="24" textAnchor="middle" fill="#5C068C" fontSize="10" fontWeight="bold">J</text>
      </g>
    )
  },
  {
    name: "HENSEL PHELPS",
    bg: "#002855",
    w: 260,
    fs: 18,
    logo: (
      <g>
        <rect x="8" y="12" width="14" height="14" rx="2" fill="white" opacity="0.9"/>
        <text x="15" y="22" textAnchor="middle" fill="#002855" fontSize="8" fontWeight="bold">HP</text>
      </g>
    )
  },
];

export default function CompaniesMarquee() {
  const items = [...companies, ...companies]; // duplicate for seamless loop

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-list {
          display: flex;
          align-items: center;
          list-style: none;
          animation: marquee-scroll 35s linear infinite;
          white-space: nowrap;
        }
        .marquee-list:hover { animation-play-state: paused; }
      `}</style>

      <div className="w-full">
        <div
          className="relative flex overflow-hidden py-6"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <ul className="marquee-list">
            {items.map((c, i) => (
              <li key={i} className="flex shrink-0 items-center px-12">
                <div className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer">
                  <svg
                    viewBox={`0 0 ${c.w} 40`}
                    style={{ height: 44, width: "auto" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={c.w} height="40" rx="8" fill={c.bg} />
                    {c.logo}
                    <text
                      x={c.w / 2 + 10} y="27"
                      textAnchor="middle"
                      fill="white"
                      fontSize={c.fs}
                      fontFamily="Arial Black, sans-serif"
                      fontWeight="900"
                      letterSpacing="1"
                    >
                      {c.name}
                    </text>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}