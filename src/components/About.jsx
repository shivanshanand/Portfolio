/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const steps = [
  {
    emoji: "👨‍💻",
    text: "I’m a full‑stack dev turning ideas into interactive, intelligent web apps.",
  },
  {
    emoji: "🧠",
    text: "Clean design meets scalable code: React, Node.js, MongoDB.",
  },
  {
    emoji: "🚀",
    text: "Currently exploring AI integrations, real‑time systems, creative front‑ends.",
  },
  {
    emoji: "🎯",
    text: "From startup dashboards to crowdfunding — I build real‑world solutions.",
  },
  {
    emoji: "📬",
    text: "Open to freelance & collaborations!",
  },
];

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full bg-base-100 text-base-content px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* ========= Background Visuals ========= */}
      <div className="absolute -top-20 -left-16 w-60 h-60 bg-primary opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-secondary opacity-10 blur-2xl rounded-full animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent pointer-events-none" />

      {/* ========= Section Heading ========= */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center drop-shadow-md relative z-10">
        About Me
      </h2>

      {/* ========= Steps ========= */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10 relative z-10">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            className="flex flex-col items-center text-center bg-base-200/60 backdrop-blur-md border border-primary/10 shadow-md px-6 py-6 rounded-2xl"
          >
            <p className="text-5xl mb-4">{item.emoji}</p>
            <p className="text-lg md:text-xl text-base-content/80 max-w-2xl">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutSection;
