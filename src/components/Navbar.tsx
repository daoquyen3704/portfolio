import { useState, useEffect } from "react";

const navItems = ["Home", "Projects", "Resume"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSayHi, setHoveredSayHi] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item: string) => {
    setActive(item);
    if (item === "Home") window.scrollTo({ top: 0, behavior: "smooth" });
    if (item === "Work") document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    if (item === "Resume") document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? "shadow-md shadow-black/10" : ""
          }`}
      >
        {/* Logo */}
        <button
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          className="relative w-9 h-9 rounded-full p-[2px] transition-transform duration-300 hover:scale-110"
          style={{
            background: logoHover
              ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
              : "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
          }}
        >
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">DQ</span>
          </div>
        </button>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav links */}
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${active === item
              ? "text-text-primary bg-stroke/50"
              : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
          >
            {item}
          </button>
        ))}

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say hi */}
        <button
          onMouseEnter={() => setHoveredSayHi(true)}
          onMouseLeave={() => setHoveredSayHi(false)}
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
        >
          {hoveredSayHi && (
            <span
              className="absolute rounded-full"
              style={{
                inset: "-2px",
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
            />
          )}
          <span className="relative bg-surface rounded-full backdrop-blur-md px-3 py-1.5 text-text-primary inline-flex items-center gap-1">
            Say hi <span className="text-xs">↗</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
