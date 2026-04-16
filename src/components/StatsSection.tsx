import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "100%", label: "Satisfied Clients" },
];

const StatsSection = () => (
  <section id="stats" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="text-center"
          >
            <p className="text-5xl md:text-6xl font-display italic text-text-primary mb-2">{s.value}</p>
            <p className="text-sm text-muted uppercase tracking-[0.2em]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
