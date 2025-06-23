/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLaptopCode, FaBolt, FaPaintBrush, FaLock } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-cyan-400 text-4xl" />,
    title: "Full-Stack Web Development",
    description: "End-to-end MERN stack solutions tailored to your needs.",
  },
  {
    icon: <FaBolt className="text-yellow-400 text-4xl" />,
    title: "Real-time Integration",
    description: "Add Socket.IO, push notifications, and live status systems.",
  },
  {
    icon: <FaPaintBrush className="text-pink-400 text-4xl" />,
    title: "UI/UX Implementation",
    description:
      "Design intuitive interfaces using Figma, wireframes, and Tailwind for responsive implementation.",
  },
  {
    icon: <FaLock className="text-red-400 text-4xl" />,
    title: "Authentication Systems",
    description:
      "Implement secure login, signup, JWT, OTP, and protected routes.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-base-100 text-base-content px-6 md:px-16 py-24 relative z-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center drop-shadow-sm">
        Services I Offer
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-base-200/60 backdrop-blur-md border border-primary/10 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:drop-shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-secondary-content mb-2">
              {service.title}
            </h3>
            <p className="text-base-content/70 text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
