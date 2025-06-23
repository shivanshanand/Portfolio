/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiSocketdotio,
  SiFigma,
  SiPassport,
  SiRender,
  SiNetlify,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const iconMap = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  React: <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <BiCodeAlt className="text-white" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  "Passport.js": <SiPassport className="text-red-400" />,
  "Socket.IO": <SiSocketdotio className="text-white" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  GitHub: <FaGithub className="text-white" />,
  Postman: <SiPostman className="text-orange-500" />,
  Netlify: <SiNetlify className="text-green-400" />,
  Render: <SiRender className="text-white" />,
};

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB", "Passport.js", "Socket.IO"],
  "Tools & Platforms": ["Figma", "GitHub", "Postman", "Netlify", "Render"],
};

const SkillsSection = () => {
  return (
    <section
      id="toolbox"
      className="bg-base-100 text-base-content py-24 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center drop-shadow-sm">
        My Toolbox
      </h2>
      <p className="text-base-content/70 text-md text-center mb-12">
        A blend of technologies, frameworks, and tools I use to build smart,
        responsive, and robust web experiences.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, techList], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-base-200/60 backdrop-blur-md border border-primary/10 shadow-md p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category}
            </h3>
            <ul className="space-y-3">
              {techList.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-3 text-base-content/80 hover:text-primary transition"
                >
                  <span className="text-2xl">{iconMap[tech]}</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
