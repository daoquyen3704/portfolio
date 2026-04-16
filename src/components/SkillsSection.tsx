import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "TanStack", icon: "https://cdn.simpleicons.org/reactquery" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/44B78B" }, // Django default is too dark, explicit soft green
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

const SkillsSection = () => (
  <section id="skills" className="bg-bg py-16 md:py-32 relative overflow-hidden">
    {/* Subtle Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-10 md:mb-14"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Expertise</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-text-primary font-light">
              My <em className="font-display italic">Skills</em>
            </h2>
            <p className="text-sm text-muted mt-2">The technologies and frameworks I use to craft digital experiences.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="p-8 md:p-12 rounded-[40px] bg-surface/10 backdrop-blur-sm border border-stroke hover:bg-surface/20 transition-colors duration-500"
      >
        <div className="flex flex-wrap gap-4 md:gap-5 justify-center md:justify-start">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group cursor-default"
            >
              {/* Hover Glow Behind Pill */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative px-6 py-3 rounded-full bg-surface/50 border border-stroke text-sm md:text-base text-text-primary flex items-center gap-3 group-hover:border-white/30 transition-all duration-300 shadow-sm overflow-hidden">
                {/* Colored Icon */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none"
                  loading="lazy"
                />
                <span className="relative z-10 tracking-wide font-medium group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
