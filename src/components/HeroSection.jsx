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

      {/* === Avatar Bubble - Clean Circular Style === */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
        className="flex justify-center md:justify-end"
      >
        <motion.img
          src="/profilee.jpeg"
          alt="Shivansh"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-primary shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          style={{
            filter: "brightness(1.08) contrast(1.05)",
            objectPosition: "center 0px",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
