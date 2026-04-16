import { motion } from "framer-motion";
import projectLMS from "@/assets/LMS4.png";
import projectArchitecture from "@/assets/phongtro.png";
import projectHuman from "@/assets/todoapp.png";
import projectBrand from "@/assets/project-brand.jpg";

const projects = [
  { title: "Learning Management System", image: projectLMS, span: "md:col-span-7", aspect: "aspect-[4/3]", link: "https://github.com/daoquyen3704/lms_project" },
  { title: "Phongtro123", image: projectArchitecture, span: "md:col-span-5", aspect: "aspect-[3/4]", link: "https://github.com/daoquyen3704/phongtro123" },
  { title: "ToDoApp", image: projectHuman, span: "md:col-span-5", aspect: "aspect-[3/4]", link: "https://github.com/daoquyen3704/todoapp" },
  { title: "QSmart", image: projectBrand, span: "md:col-span-7", aspect: "aspect-[4/3]", link: "https://github.com/daoquyen3704/QSmart" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const SelectedWorks = () => (
  <section id="work" className="bg-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-16 md:mb-24"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">My Projects</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-text-primary font-light">
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm text-muted mt-2">A selection of projects I've worked on, from concept to launch.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-sm text-text-primary hover:bg-stroke/30 transition-colors">
            View all work <span>→</span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`${p.span} group relative rounded-3xl overflow-hidden bg-surface border border-stroke cursor-pointer block`}
          >
            <div className={`${p.aspect} relative w-full h-full overflow-hidden`}>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/80 px-5 py-2.5 text-sm text-text-primary">
                  View on GitHub — <em className="font-display italic">{p.title}</em>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWorks;
