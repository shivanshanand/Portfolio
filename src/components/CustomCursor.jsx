/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setTrail((prev) => [...prev.slice(-5), newPos]);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 z-[9999] pointer-events-none w-4 h-4 bg-primary rounded-full opacity-50"
          animate={{ x: pos.x - 8, y: pos.y - 8, opacity: 0 }}
          transition={{ duration: 0.5 + index * 0.05, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 bg-primary rounded-full mix-blend-difference"
        animate={{ x: position.x - 12, y: position.y - 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
