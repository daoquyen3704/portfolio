import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jun 2026 - Aug 2026",
    role: "Research Assistant",
    company: "VinUniversity",
    description: "Participate in research activities related to AI, ML, and LLMs."
  },
  {
    period: "Feb 2026 - May 2026",
    role: "Fullstack Developer",
    company: "Mumesoft Innovations",
    description: "Django & NextJs Internship"
  },
  {
    period: "Oct 2025 - Feb 2026",
    role: "FullStack Web Developer",
    company: "HISOTECH TECHNOLOGY SOLUTIONS",
    description: "Developed and maintained full-stack platforms and custom CMS solutions for various small to medium enterprises."
  },
  {
    period: "2022 - 2026",
    role: "Students specialized in Software Engineering",
    company: "Electric Power University",
    description: "Major in Information Technology"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-bg py-16 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Timeline</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl text-text-primary font-light">
                Work <em className="font-display italic">Experience</em>
              </h2>
              <p className="text-sm text-muted mt-2">My professional journey and educational background.</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stroke -translate-x-1/2" />

          {/* Vertical Left Line (Mobile) */}
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-stroke" />

          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal w-full mb-12 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-bg border-2 border-text-primary -translate-x-1/2 z-10"
                />

                {/* Empty Space for Desktop Alternate Layout */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`w-[calc(100%-40px)] md:w-[calc(50%-40px)] ml-auto md:ml-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="p-8 rounded-[30px] bg-surface/20 backdrop-blur-sm border border-stroke hover:bg-surface/30 transition-colors duration-500 group relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <span className="inline-block px-4 py-1.5 rounded-full border border-stroke bg-bg/50 text-xs text-muted font-mono tracking-wider mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-2xl text-text-primary font-medium mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm md:text-base text-text-primary/70 font-display italic mb-4">
                      @ {exp.company}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
