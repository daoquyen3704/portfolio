import { motion } from "framer-motion";

const entries = [
  { title: "Designing for Emotion in Digital Products", read: "5 min", date: "Mar 2026" },
  { title: "The Art of Minimalism in Web Design", read: "4 min", date: "Feb 2026" },
  { title: "Building Scalable Design Systems", read: "6 min", date: "Jan 2026" },
  { title: "Creativity at the Intersection of Code", read: "3 min", date: "Dec 2025" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const JournalSection = () => (
  <section id="journal" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-10 md:mb-14"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-text-primary font-light">
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="text-sm text-muted mt-2">Writing about design, code, and everything in between.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-text-primary hover:bg-stroke/30 transition-colors">
            View all <span>→</span>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-3">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:px-6 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-colors duration-300 cursor-pointer group"
          >
            <span className="flex-1 text-sm md:text-base text-text-primary group-hover:text-text-primary/90 transition-colors">
              {entry.title}
            </span>
            <div className="flex items-center gap-4 text-xs text-muted shrink-0">
              <span>{entry.read} read</span>
              <span className="w-1 h-1 rounded-full bg-stroke" />
              <span>{entry.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JournalSection;
