/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 px-6 md:px-16 pt-28 md:pt-24 bg-base-100 text-base-content"
    >
      {/* ========== LEFT: Text Content ========== */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="text-center md:text-left max-w-xl space-y-5"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary drop-shadow-md">
          Hi, I'm Shivansh 👋
        </h1>

        <p className="text-lg md:text-xl text-base-content/80">
          I craft intelligent, interactive web experiences with clean design and
          scalable code.
        </p>

        <motion.a
          href="#contact"
          className="inline-block mt-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-lg hover:bg-primary/80 transition"
          whileHover={{ scale: 1.08 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* ========== RIGHT: Profile Bubble ========== */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
        className="flex justify-center md:justify-end"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full overflow-hidden backdrop-blur-lg border-2 border-primary/30 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
        >
          <img
            src="/profile.png"
            alt="Shivansh"
            className="w-full h-full object-cover"
            style={{
              clipPath: "ellipse(60% 70% at 50% 50%)",
              filter: "brightness(1.1) contrast(1.05)",
            }}
          />
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
