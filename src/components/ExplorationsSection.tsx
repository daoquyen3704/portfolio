import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import explore1 from "@/assets/explore-1.jpg";
import explore2 from "@/assets/explore-2.jpg";
import explore3 from "@/assets/explore-3.jpg";
import explore4 from "@/assets/explore-4.jpg";
import explore5 from "@/assets/explore-5.jpg";
import explore6 from "@/assets/explore-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const leftItems = [explore1, explore2, explore3];
const rightItems = [explore4, explore5, explore6];

const ExplorationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!section || !content || !leftCol || !rightCol) return;

    const pin = ScrollTrigger.create({
      trigger: content,
      start: "top top",
      endTrigger: section,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

    gsap.to(leftCol, {
      y: -200,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
    });

    gsap.to(rightCol, {
      y: 200,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} id="explorations" className="relative min-h-[300vh] bg-bg">
        {/* Pinned center content */}
        <div ref={contentRef} className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-text-primary font-light mb-3">
            Visual <em className="font-display italic">playground</em>
          </h2>
          <p className="text-sm text-muted max-w-sm mb-6">Creative experiments and visual explorations.</p>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-text-primary hover:bg-stroke/30 transition-colors"
          >
            Dribbble <span>↗</span>
          </a>
        </div>

        {/* Parallax columns */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-[1400px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-6 py-32">
            <div ref={leftColRef} className="flex flex-col gap-8 items-end pt-[30vh]">
              {leftItems.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img)}
                  className="pointer-events-auto aspect-square max-w-[320px] w-full rounded-2xl overflow-hidden border border-stroke cursor-pointer hover:scale-105 transition-transform duration-500"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                >
                  <img src={img} alt={`Exploration ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div ref={rightColRef} className="flex flex-col gap-8 items-start pt-[60vh]">
              {rightItems.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img)}
                  className="pointer-events-auto aspect-square max-w-[320px] w-full rounded-2xl overflow-hidden border border-stroke cursor-pointer hover:scale-105 transition-transform duration-500"
                  style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)` }}
                >
                  <img src={img} alt={`Exploration ${i + 4}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-8" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Exploration" className="max-w-full max-h-full object-contain rounded-2xl" />
        </div>
      )}
    </>
  );
};

export default ExplorationsSection;
