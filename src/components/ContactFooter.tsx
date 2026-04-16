import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/duy-quyền-đào-157494308" },
  { name: "Facebook", url: "https://facebook.com/daoduyquyen04" },
  { name: "GitHub", url: "https://github.com/daoquyen3704" }
];
const marqueeText = "BUILDING THE FUTURE • ";

const ContactFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Video BG flipped */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) scaleY(-1)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16">
          <div ref={marqueeRef} className="whitespace-nowrap flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10 mx-4">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 px-6">
          <p className="text-sm text-muted mb-4 uppercase tracking-[0.2em]">Get in touch</p>
          <a
            href="mailto:daoquyen.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-stroke px-8 py-4 text-lg text-text-primary hover:bg-stroke/20 transition-colors"
          >
            daoquyen.dev@gmail.com <span>↗</span>
          </a>
        </div>

        {/* Footer */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke pt-6">
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-wider"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
